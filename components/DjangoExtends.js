import {BodyComponent} from 'mjml-core'
import {registerDependencies} from 'mjml-validator'

registerDependencies({
    'django-extends': [
        'django-block'
    ],
    'mj-body': ['django-extends']
});

/**
 * Allows the use of django blocks in the rendered HTML
 */
export default class DjangoExtends extends BodyComponent {
    static allowedAttributes = {
        template: 'string',
        variable: 'boolean',
    };

    static defaultAttributes = {
        variable: false,
    };

    render() {
        let template = this.getAttribute('template');
        if (!this.getAttribute('variable')) {
            template = `'${template}'`;
        }

        return `{% extends ${template} %}
                ${this.renderChildren(this.props.children)}`;
    }
}
