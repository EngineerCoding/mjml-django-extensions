import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'


registerDependencies({
    'mjml': ['django-include'],
    'mj-head': ['django-include'],
    'mj-body': ['django-include'],
    'mj-section': ['django-include'],
    'mj-column': ['django-include'],
});

/**
 * Allows the use of django blocks in the rendered HTML
 */
export default class DjangoInclude extends BodyComponent {
    static allowedAttributes = {
        template: 'string'
    };

    static endingTag = true;

    render() {
        return `{% include '${this.getAttribute('template')}' %}`;
    }
}
