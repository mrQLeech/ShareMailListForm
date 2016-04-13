/// <reference path='_refs.ts' />


module EmailEditorMod{
    'use strict';

    var testApp = angular.module('EmailEditorModule', []).
                        controller('EmailEditorCtrl', EmailEditorCtrl).
                        directive('eMailInput', eMailInput);
}