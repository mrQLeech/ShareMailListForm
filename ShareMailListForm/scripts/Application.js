/// <reference path='_refs.ts' />
var EmailEditorMod;
(function (EmailEditorMod) {
    'use strict';
    var testApp = angular.module('EmailEditorModule', []).
        controller('EmailEditorCtrl', EmailEditorMod.EmailEditorCtrl).
        directive('eMailInput', EmailEditorMod.eMailInput);
})(EmailEditorMod || (EmailEditorMod = {}));
//# sourceMappingURL=Application.js.map