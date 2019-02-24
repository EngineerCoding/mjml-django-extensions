import {BodyComponent} from 'mjml-core'
import {registerDependencies} from 'mjml-validator'


registerDependencies({
    'mjml': ['django-block'],
    'mj-head': ['django-block'],
    'mj-body': ['django-block'],
    'mj-section': ['django-block'],
    'mj-column': ['django-block'],
    'django-block': [
        'mj-attributes',
        'mj-breakpoint',
        'mj-font',
        'mj-preview',
        'mj-style',
        'mj-title',
        'mj-accordion',
        'mj-button',
        'mj-carousel',
        'mj-column',
        'mj-divider',
        'mj-group',
        'mj-hero',
        'mj-image',
        'mj-navbar',
        'mj-raw',
        'mj-section',
        'mj-social',
        'mj-spacer',
        'mj-table',
        'mj-text',
        'mj-wrapper'
    ]
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
