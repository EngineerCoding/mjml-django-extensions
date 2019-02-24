import {BodyComponent} from 'mjml-core'

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
