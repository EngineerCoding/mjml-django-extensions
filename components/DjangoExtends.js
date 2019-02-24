import {BodyComponent} from 'mjml-core'
import {registerDependencies} from 'mjml-validator'

registerDependencies({
    'django-extends': [
        'django-include',
        'django-block'
    ]
});

/**
 * Allows the use of django blocks in the rendered HTML
 */
export default class DjangoExtends extends BodyComponent {
    static allowedAttributes = {
        template: 'string'
    };

    render() {
        return `
{% extends '${this.getAttribute('template')} %}

${this.renderChildren(this.props.children)}
`;
    }
}
