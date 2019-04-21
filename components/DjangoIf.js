import {BodyComponent} from 'mjml-core'
import {registerDependencies} from 'mjml-validator'


registerDependencies({
    'mjml': ['django-if'],
    'mj-head': ['django-if'],
    'mj-body': ['django-if'],
    'mj-section': ['django-if'],
    'mj-column': ['django-if'],
    'django-if': [
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
        'mj-wrapper',
        'django-include'
    ]
});

/**
 * Allows the use of django blocks in the rendered HTML
 */
export default class DjangoIf extends BodyComponent {
    static allowedAttributes = {
        condition: 'string'
    };

    render() {
        return `{% if ${this.getAttribute('condition')} %}
                <div style="padding:10px 25px">
                ${this.renderChildren(this.props.children)}
                </div>
                {% endif %}`;
    }
}
