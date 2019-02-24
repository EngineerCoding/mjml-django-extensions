import fs from 'fs';


function postProcess(file) {
    if (fs.existsSync(file)) {
        let contents = fs.readFileSync(file, 'utf8').toString();
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
                const fileContent = contents.substr(0, lastEndBlock);
                fs.writeFileSync(file, fileContent);
            }
        }
    }
}

export default postProcess;

const argumentsCopy = [...process.argv];
delete argumentsCopy[0];
delete argumentsCopy[1];

argumentsCopy.forEach(postProcess);



