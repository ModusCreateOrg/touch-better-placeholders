Ext.define('FormExample.view.Main', {
    extend   : 'Ext.form.Panel',
    requires : [
        'Ext.form.FieldSet',
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
                    },
                    {
                        xtype       : 'placeholderfield',
                        placeHolder : 'First Name'
                    },
                    {
                        xtype       : 'placeholderfield',
                        placeHolder : 'Last Name'
                    }
                ]
            }
        ]
    }
});