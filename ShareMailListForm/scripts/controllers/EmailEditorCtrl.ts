/// <reference path='../_refs.ts' />
/**
 * Created by Krasnov on 13.04.2016 1:18.
 */
module EmailEditorModule{
    'use strict';

    export class EmailEditorCtrl{
        private mailList: EMailModel[];

        public static $inject = [
            '$scope',
            '$location'
        ];

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(private $scope: IEMailScope, private $location: ng.ILocationService){
        }
    }
}