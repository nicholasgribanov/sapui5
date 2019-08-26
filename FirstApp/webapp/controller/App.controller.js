sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"opensap/firstapp/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, MessageToast, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("opensap.firstapp.controller.App", {

		formatter: formatter,

		onShowHello: function () {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			MessageToast.show(sMsg);
		},

		onFilterProducts: function (oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			var oList = this.getView().byId("productsList");
			var oBinding = oList.getBinding("items");

			if (sQuery) {
				aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
			}
			oBinding.filter(aFilter);
		}

	});
});