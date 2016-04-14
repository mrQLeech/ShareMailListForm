/// <reference path='_refs.ts' />

module emailEditorMod{
    'use strict';

    var testApp = angular.module('EmailEditorModule', ['ngRoute']).
                controller('EmailEditorCtrl', emailEditorCtrl).
                directive('eMailInput', eMailInput).
                        config(function($routeProvider, $locationProvider) {
                            $routeProvider
                                .when('/', {
                                    templateUrl: '../index.html',
                                    controller: 'EmailEditorCtrl',

                                });
                            $locationProvider.html5Mode(true);
                        });
}