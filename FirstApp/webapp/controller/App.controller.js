sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"opensap/firstapp/model/formatter"
], function (Controller, MessageToast, formatter) {
	"use strict";
	return Controller.extend("opensap.firstapp.controller.App", {
		
		formatter: formatter,

		onShowHello: function () {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			MessageToast.show(sMsg);
		}
	});
});