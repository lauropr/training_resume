sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.data.binding.resume.controller.View1", {
		onInit: function () {

			window._painel = this.byId("panel_comp");

			var oDataSource = {
				name: "Lauro",
				lastName: "Ribeiro",
				address: {
					street: {
						name: "Rua fictícea",
						number: "0"
					},
					city: "Cidade Fictícea",
					state: {
						name: "Parana",
						abbreviation: "PR"
					}
				},
				skills: [{
					name: "ABAP"
				}, {
					name: "UI5"
				}, {
					name: "Javascript"
				}],
				companies: [{
					name: "Exakta",
					job: "Developer"
				}, {
					name: "NTT Data",
					job: "Onsite Coordinator"
				}, {
					name: "John Deere",
					job: "Software Engineer"
				}]
			};

			//			var oResumeModel = new JSONModel(oDataSource);
			var oResumeModel = new JSONModel("https://www.mocky.io/v2/5ec86c552f00008e00db6fea");

			this.getView().setModel(oResumeModel);

			debugger;

			// var githubModel = new JSONModel("https://api.github.com/users/lauropr/repos");
			// var oTable = this.byId("tblGithub").setModel(githubModel, "gitHubModel");

		},

		convertUpper: function (sText) {
			if (sText === undefined) {
				return "...";
			}
			return sText.toUpperCase();
		}
	});
});