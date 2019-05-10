import {BodyComponent} from 'mjml-core'
import {registerDependencies} from 'mjml-validator'


registerDependencies({
    'mjml': ['django-block-trans'],
    'mj-head': ['django-block-trans'],
    'mj-body': ['django-block-trans'],
    'mj-section': ['django-block-trans'],
    'mj-column': ['django-block-trans'],
    'django-block': ['django-block-trans'],
});


/**
 * Allows the use of django trans tags in mjml
 */
export default class DjangoBlockTrans extends BodyComponent {
    static allowedAttributes = {
        align: 'enum(left,right,center,justify)',
        'background-color': 'color',
        color: 'color',
        'container-background-color': 'color',
        'font-family': 'string',
        'font-size': 'unit(px)',
        'font-style': 'string',
        'font-weight': 'string',
        height: 'unit(px,%)',
        'letter-spacing': 'unit(px,%)',
        'line-height': 'unit(px,%)',
        'padding-bottom': 'unit(px,%)',
        'padding-left': 'unit(px,%)',
        'padding-right': 'unit(px,%)',
        'padding-top': 'unit(px,%)',
        padding: 'unit(px,%){1,4}',
        'text-decoration': 'string',
        'text-transform': 'string',
        'vertical-align': 'enum(top,bottom,middle)'
    };

    static defaultAttributes = {
        align: 'left',
        color: '#000000',
        'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
        'font-size': '13px',
        'line-height': '1',
        padding: '10px 25px',
    };

    render() {
        return this.renderMJML(
            `<mj-text ${this.htmlAttributes(this.attributes)}>
                {% blocktrans %}${this.getContent()}{% endblocktrans %}
            </mj-text>`);
    }
}
