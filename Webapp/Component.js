sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    return UIComponent.extend ("sap.hr.mss.Component", {

    metadata : {},
    init: function (){

        UIComponent.prototype.init.apply(this);
    },

    createContent: function (){

    var oView = sap.ui.view ({

            viewName : "sap.hr.mss.view.App",
            id : "idAPPView",
            type : "XML"
    });

    var oView1 = sap.ui.view ({

        viewName : "sap.hr.mss.view.View1",
        id : "idView1",
        type : "XML"
}); 

var oView2 = sap.ui.view ({

    viewName : "sap.hr.mss.view.View2",
    id : "idView2",
    type : "XML"

});
    var oAppCon = oView.byId("appCon");

    oAppCon.addPage(oView1).addPage(oView2);

        return oView ;
    }

    });
});