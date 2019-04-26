import fs from 'fs';


const LOAD_I18N = '{% load i18n %}\n';


function postProcess(file) {
    if (fs.existsSync(file)) {
        // Discard everything before the extends
        // And add i18n loading (after extends if applicable)

        let contents = fs.readFileSync(file, 'utf8').toString();
        let modified = false;

        const extendsIndex = contents.indexOf('{% extends');

        if (extendsIndex !== -1) {
            // Discard everything before the extends
            contents = contents.substr(extendsIndex);
            // Find the last endblock
            let lastEndBlock = 0;
            while (true) {
                const endBlock = contents.indexOf('{% endblock %}', lastEndBlock);
                if (endBlock !== -1) {
                    lastEndBlock = endBlock + 14;
                } else {
                    break;
                }
            }
            if (lastEndBlock !== 0) {
                modified = true;
                contents = contents.substr(0, lastEndBlock);
            }
        }

        const transIndex = contents.indexOf('{% trans');
        const blockTransIndex = contents.indexOf('{% blocktrans %}');

        if (transIndex !== -1 || blockTransIndex !== -1) {
            // Check if extends was available, because loading should happen afterwards
            if (extendsIndex !== -1) {
                contents = contents.replace(/({% extends '.+?' %})/g, '$1\n' + LOAD_I18N);
            } else {
                contents = LOAD_I18N + contents;
            }
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(file, contents);
        }
    }
}

export default postProcess;

const argumentsCopy = [...process.argv];
delete argumentsCopy[0];
delete argumentsCopy[1];

argumentsCopy.forEach(postProcess);



