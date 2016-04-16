/// <reference path='_refs.ts' />

module emailEditorMod{
    'use strict';

    var testApp = angular.module('apps', ['ngRoute'])
        .controller('emailEditorCtrl', ['$scope', emailEditorCtrl])
        .directive('emailsEditor', emailsEditor);

}