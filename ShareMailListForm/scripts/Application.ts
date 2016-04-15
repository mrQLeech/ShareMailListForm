/// <reference path='_refs.ts' />

module emailEditorMod{
    'use strict';

    var testApp = angular.module('apps', ['ngRoute'])
        .directive('emailsEditor', emailsEditor)
       // .directive('button', btnClicker)
        .controller('emailEditorCtrl', emailEditorCtrl);

}