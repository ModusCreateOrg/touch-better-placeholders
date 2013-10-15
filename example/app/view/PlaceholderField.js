/**
 * Created with JetBrains WebStorm.
 * User: stan229
 * Date: 10/15/13
 * Time: 1:56 PM
 */
Ext.define('FormExample.view.PlaceholderField', {
    extend     : 'Ext.field.Text',
    xtype      : 'placeholderfield',
    config     : {
        placeHolderTpl     : ''.concat(
            '<div class="placeholder">{placeHolder}</div>'
        ),
        placeHolderElement : undefined
    },
    initialize : function () {
        var me = this;
        me.on({
            focus : 'onFocus',
            scope : me
        });
        me.callParent();
    },
    onFocus    : function () {
        var me = this,
            el = me.element,
            inputEl = el.down('.x-field-input'),
            placeHolder = me.getPlaceHolder(),
            placeHolderEl = me.getPlaceHolderElement(),
            placeHolderFragment;

        if (placeHolder && !placeHolderEl) {
            placeHolderFragment = new Ext.Template(me.getPlaceHolderTpl()).apply({
                placeHolder : placeHolder
            });
            placeHolderEl = inputEl.insertHtml('beforeBegin', placeHolderFragment, true);
            me.setPlaceHolderElement(placeHolderEl);
        }
    }
});
