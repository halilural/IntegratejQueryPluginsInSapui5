sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"IntegratejQueryPlugInSapUi5/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("IntegratejQueryPlugInSapUi5.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// Importing intTelInput library into projects. 

			debugger;

			jQuery.sap.registerModulePath("InternationalTelephoneInput", jQuery.sap.getResourcePath("IntegratejQueryPlugInSapUi5/res/js/"));
			jQuery.sap.includeStyleSheet(jQuery.sap.getResourcePath("IntegratejQueryPlugInSapUi5/res/css/demo.css"), "demo");
			jQuery.sap.includeStyleSheet(jQuery.sap.getResourcePath("IntegratejQueryPlugInSapUi5/res/css/intlTelInput.css"), "demo");

		}
	});
});