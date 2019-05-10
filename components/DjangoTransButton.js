import {BodyComponent} from 'mjml-core'
import {registerDependencies} from 'mjml-validator'


registerDependencies({
    'mjml': ['django-trans-button'],
    'mj-body': ['django-trans-button'],
    'mj-section': ['django-trans-button'],
    'mj-column': ['django-trans-button'],
    'django-block': ['django-trans-button'],
});

/**
 * Allows the use of django trans tags in mjml
 */
export default class DjangoTransButton extends BodyComponent {
    static allowedAttributes = {
        align: 'enum(left,center,right)',
        'background-color': 'color',
        'border-bottom': 'string',
        'border-left': 'string',
        'border-radius': 'string',
        'border-right': 'string',
        'border-top': 'string',
        border: 'string',
        color: 'color',
        'container-background-color': 'color',
        'font-family': 'string',
        'font-size': 'unit(px)',
        'font-style': 'string',
        'font-weight': 'string',
        height: 'unit(px,%)',
        href: 'string',
        name: 'string',
        'inner-padding': 'unit(px,%)',
        'line-height': 'unit(px,%)',
        'padding-bottom': 'unit(px,%)',
        'padding-left': 'unit(px,%)',
        'padding-right': 'unit(px,%)',
        'padding-top': 'unit(px,%)',
        padding: 'unit(px,%){1,4}',
        rel: 'string',
        target: 'string',
        'text-decoration': 'string',
        'text-transform': 'string',
        'vertical-align': 'enum(top,bottom,middle)',
        'text-align': 'enum(left,right,center)',
        width: 'unit(px,%)',
    };

    static defaultAttributes = {
        align: 'center',
        'background-color': '#414141',
        border: 'none',
        'border-radius': '3px',
        color: '#ffffff',
        'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
        'font-size': '13px',
        'font-weight': 'normal',
        'inner-padding': '10px 25px',
        'line-height': '120%',
        padding: '10px 25px',
        target: '_blank',
        'text-decoration': 'none',
        'text-transform': 'none',
        'vertical-align': 'middle',
    };

    render() {
        return this.renderMJML(
            `<mj-button ${this.htmlAttributes(this.attributes)}>
                {% trans "${this.getContent()}" %}
            </mj-button>`);
    }
}
