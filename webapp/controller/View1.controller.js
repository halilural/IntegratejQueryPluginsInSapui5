sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("IntegratejQueryPlugInSapUi5.controller.View1", {

		onInit: function() {

			this._oView = this.getView();
			this._oInput = this._oView.byId("iMobilePhoneNumber");
			this._initModel();
		},

		_initModel: function() {

			var oViewModel = new sap.ui.model.json.JSONModel({
				MobilePhoneNumber: "",
				ValidNumber: "Waiting..."
			});

			this._oView.setModel(oViewModel, "ViewModel");

		},

		_getViewModel: function() {
			return this._oView.getModel("ViewModel");
		},

		onAfterRendering: function() {

			debugger;

			var sUrl = "https://ipinfo.io";

			jQuery.sap.require("InternationalTelephoneInput.intlTelInput");
			jQuery.sap.require("InternationalTelephoneInput.utils");

			this.oIti = intlTelInput(this._getSelector(this._oInput), {
				initialCountry: "auto",
				geoIpLookup: function(callback) {
					$.get(sUrl, function() {}, "jsonp").always(function(resp) {
						var countryCode = (resp && resp.country) ? resp.country : "";
						callback(countryCode);
					});
				},
				nationalMode: true,
				utilsScript: "res/js/utils.js"
			});

		},

		onPress: function() {

			debugger;

			var sValue;

			if (this.oIti.isValidNumber()) {
				// Do submit process
				this._oInput.setValueState(sap.ui.core.ValueState.Success);
				// Get Value from Mobile Phone Input
				sValue = "Valid Number: " + this._getViewModel().getProperty("/MobilePhoneNumber");

			} else {
				// Don't submit process
				this._oInput.setValueState(sap.ui.core.ValueState.Error);
				sValue = "Wrong phone number.";
			}

			this._getViewModel().setProperty("/ValidNumber", sValue);

		},

		_getSelector: function(oSapUiElement) {

			var sInputId = oSapUiElement.$().find('input').attr('id'),
				oSelector = document.querySelector('#' + sInputId);

			return oSelector;

		}

	});
});