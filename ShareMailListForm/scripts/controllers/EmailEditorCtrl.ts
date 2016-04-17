/// <reference path='../_refs.ts' />



module emailEditorMod{
    'use strict';


    export class emailEditorCtrl{
        mailList: IEMailCollection;

        public static $inject = [
            '$scope'
        ];

        constructor(private $scope: IEMailScope){
            this.mailList = new EMailCollection();
        }

    }
}