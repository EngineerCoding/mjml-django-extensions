import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

/**
 * Allows the use of django blocks in the rendered HTML
 */
export default class DjangoInclude extends BodyComponent {
    static allowedAttributes = {
        template: 'string'
    };

    static endingTag = true;

    render() {
        return `
{% include '${this.getAttribute('template')}' %}
`;
    }
}
