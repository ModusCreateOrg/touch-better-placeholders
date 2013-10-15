Ext.define('FormExample.view.Main', {
    extend   : 'Ext.form.Panel',
    requires : [
        'FormExample.view.PlaceholderField'
    ],
    config   : {

        items : [
            {
                xtype : 'fieldset',
                items : [
                    {
                        xtype : 'placeholderfield',
                        label : 'bar'
                    },
                    {
                        xtype       : 'placeholderfield',
                        placeHolder : 'foobar'
                    }
                ]
            }
        ]
    }
});