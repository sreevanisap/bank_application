sap.ui.define([
    "sap/ui/core/mvc/Controller"
    //  "/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ) {
        "use strict";

        return Controller.extend("bankapplication.controller.View1", {
            // formatter: formatter,
            onInit: function () {
                this._setGlobalModel();

                let oData = {
                    "accountDetails": {
                        "AccountNum": "45920842093",
                        "Name": "Sreevani Kamalla ",
                        "Ifsc": "88887502",
                        "custId": "850320",
                        "Address": {
                            "city": "Suryapet",
                            "state": "Telangana",
                            "postalcode": "508213",
                            "country": "India"
                        }
                    },
                    "cardDetails": [
                        {
                            "cardcompany": "Master Card",
                            "cardtype": "Debit Card",
                            "cardnumber": "8204637291047",
                            "assigneddate": "assigned on 4 Aug 2017",
                            "state": true
                        },
                        {
                            "cardcompany": "Master Card",
                            "cardtype": "Credit Card",
                            "cardnumber": "35890540247839",
                            "assigneddate": "assigned on 28 Feb 2016",
                            "state": false
                        },
                        {
                            "cardcompany": "Master Card",
                            "cardtype": "Debit Card",
                            "cardnumber": "459023809527",
                            "assigneddate": "assigned on 4 Aug 2017",
                            "state": true
                        }
                    ]
                };
                
                let oModel = new sap.ui.model.json.JSONModel();
                 oModel.setData(oData);
                this.getView().setModel(oModel, "oBankdetails")
                
               /* setting user profile */
                let oProfileModel = new sap.ui.model.json.JSONModel(
                    { profile: sap.ui.require.toUrl("bankapplication/images/profile.jpeg") }
                );
                this.getView().setModel(oProfileModel);
            },
            	/**
		 * Creates a message for a selection change event on the chart
		 *
		 * @private
		 */
		onSelectionChanged: function (oEvent) {
			var oSegment = oEvent.getParameter("segment");
			sap.m.MessageToast.show( oSegment.getLabel() + " : " + ((oSegment.getValue()> 50) ? "Critical" : "Moderate"));
		},
            onSpanish: function () {
                // var appLang,
                //     i18nModel = this.getOwnerComponent().getModel(appLang);
                // if (navigator.language == "es")
                //     appLang = "i18n_es";
                // else if (navigator.language == "en")
                //     appLang = "i18n";
                // else
                //     appLang = "i18n";
                // this.getOwnerComponent().setModel(i18nModel, "i18n");

                // var imodel = this.getOwnerComponent().getModel("i18n_es");
                // this.getOwnerComponent().setModel(imodel, "i18n");
                sap.ui.getCore().getConfiguration().setLanguage("es");
            },

            //creating dialog
            onOpenBankDetails: function () {
                if (!this.moreBankDetails) {
                    this.moreBankDetails = this.loadFragment(
                        { name: "bankapplication.view.fragments.MoreDetails" }
                    );
                }
                this.moreBankDetails.then(
                    function (oDialog) {
                        oDialog.open();
                    });

            },
            onCloseBankDetails: function () {
                this.byId("moreBankDetails").close();
            },
            //  onSelectionChanged: function(oEvent){
            //      let esalary = this.getOwnerComponent().getModel("oBankdetails").getProperty("/empsalary"),
            //    osegment= oEvent.getParameter("segment"),
            //     back = osegment.getValue(),
            //   percentageval = (back/esalary)*100;
            //    sap.m.MessageToast.show(+osegment.getValue()+ " has spent on " +osegment.getLabel()+ ".     " +((percentageval > 35 )? "review is need":"review is not need") );
            //   },
        
            _setGlobalModel: function () {
                let oModel = this.getOwnerComponent().getModel("oBankdetails");
                this.getView().setModel(oModel);
            }
        });
    });
