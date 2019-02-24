import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'

registerDependencies({
// Tell the validator which tags are allowed as our component's children
    'mj-layout': [
        'mj-accordion',
        'mj-button',
        'mj-carousel',
        'mj-divider',
        'mj-html',
        'mj-image',
        'mj-raw',
        'mj-social',
        'mj-spacer',
        'mj-table',
        'mj-text',
        'mj-navbar'
    ],
// Now tell the validator which tag sare allowed as our component's parent
    'mj-wrapper': ['mj-layout']
});

/**
 * Allows the use of django blocks in the rendered HTML
 */
export default class DjangoBlock extends BodyComponent {
    static allowedAttributes = {
        name: 'string'
    };

    render() {
        return `
{% block ${this.getAttribute('name')} %}
${this.renderChildren(this.props.children)}
{% endblock %}
`;
    }
}
