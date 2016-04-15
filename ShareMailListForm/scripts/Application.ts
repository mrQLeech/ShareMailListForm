/// <reference path='_refs.ts' />

module emailEditorMod{
    'use strict';

    var testApp = angular.module('apps', ['ngRoute'])
        .directive('emailsEditor', emailsEditor)
        .controller('emailEditorCtrl', emailEditorCtrl)
        .controller('button', emailEditorCtrl);

}