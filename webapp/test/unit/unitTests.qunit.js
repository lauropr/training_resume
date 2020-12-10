/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ovly/data/binding/resume/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});