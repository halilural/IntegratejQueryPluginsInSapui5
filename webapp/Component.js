sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"IntegratejQueryPluginsIntegratejQueryPlugins/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("IntegratejQueryPluginsIntegratejQueryPlugins.Component", {

		metadata: {
			"version": "1.0.0",
			"rootView": {
				viewName: "IntegratejQueryPluginsIntegratejQueryPlugins.view.View1",
				type: sap.ui.core.mvc.ViewType.XML
			},
			"dependencies": {
				"libs": ["sap.ui.core", "sap.m", "sap.ui.layout"]
			},
			"config": {
				"i18nBundle": "IntegratejQueryPluginsIntegratejQueryPlugins.i18n.i18n",
				"icon": "",
				"favIcon": "",
				"phone": "",
				"phone@2": "",
				"tablet": "",
				"tablet@2": ""
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * In this method, the resource and application models are set.
		 * @public
		 * @override
		 */
		init: function() {
			var mConfig = this.getMetadata().getConfig();

			// set the i18n model
			this.setModel(models.createResourceModel(mConfig.i18nBundle), "i18n");

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});