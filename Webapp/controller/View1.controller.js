sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';

    return Controller.extend ("sap.hr.mss.View1",{




        onNext : function (){

        var oAppCon = this.getView().getParent();
        oAppCon.to("idView2");
        },
        onActionList : function(){

            this.onNext()
        }
    } 
    
    )
    
});