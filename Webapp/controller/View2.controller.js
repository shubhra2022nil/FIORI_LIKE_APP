sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';

    return Controller.extend ("sap.hr.mss.View2",{




        onBack : function (){

        var oAppCon2 = this.getView().getParent();
        oAppCon2.to("idView1");
        }
    } 
    
    )
    
});