/**
 * Created with JetBrains WebStorm.
 * User: stan229
 * Date: 10/15/13
 * Time: 1:56 PM
 */
Ext.define('FormExample.view.PlaceholderField', {
    extend                   : 'Ext.field.Text',
    xtype                    : 'placeholderfield',
    config                   : {
        cls            : 'x-placeholder-field',
        placeHolderTpl     : ''.concat(
            '<div class="placeholder">{placeHolder}</div>'
        ),
        placeHolderElement : undefined
    },
    initialize               : function () {
        var me = this;
        me.callParent();

        me.getComponent().on({
            keyup        : 'onKeyUp',
            clearicontap : 'onClearIconTap',
            scope        : me
        });

    },
    onKeyUp                  : function (e) {
        var me = this,
            placeHolder = me.getPlaceHolder(),
            placeHolderEl = me.getPlaceHolderElement(),
            inputEl,
            placeHolderFragment,
            applyClassFn;

        if (placeHolder && !placeHolderEl) {
            inputEl = me.element.down('.x-field-input')
            placeHolderFragment = new Ext.Template(me.getPlaceHolderTpl()).apply({
                placeHolder : placeHolder
            });
            placeHolderEl = inputEl.insertHtml('beforeBegin', placeHolderFragment, true);

            applyClassFn = function() {
                placeHolderEl.addCls('added');
            };
            window.requestAnimationFrame(applyClassFn);

            me.setPlaceHolderElement(placeHolderEl);
        } else if (placeHolderEl && !me.getValue()) {
            me.removePlaceHolderElement();
        }

        me.fireAction('keyup', [me, e], 'doKeyUp');
    },
    onClearIconTap           : function () {
        var me = this,
            placeHolderEl = me.getPlaceHolderElement();
        placeHolderEl && me.removePlaceHolderElement();
        me.callParent();
    },
    removePlaceHolderElement : function () {
        this.getPlaceHolderElement().destroy();
        this.setPlaceHolderElement(undefined);
    }
});
