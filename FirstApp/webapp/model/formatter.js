sap.ui.define([], function () {
	"use strict";

	return {
		delivery: function (sMeasure, iWeight) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var sResult = "";

			if (sMeasure === "G") {
				iWeight = iWeight / 1000;
			} else if (iWeight < 0.5) {
				sResult = oResourceBundle.getText("formatterMailDelivery");
			} else if (iWeight < 5) {
				sResult = oResourceBundle.getText("formatterParcelDelivery");
			} else {
				sResult = oResourceBundle.getText("formatterCarrierDelivery");
			}

			return sResult;
		}
	};
});