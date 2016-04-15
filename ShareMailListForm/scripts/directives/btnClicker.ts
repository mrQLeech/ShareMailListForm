/// <reference path="../_refs.ts" />

module emailEditorMod{
    'use strict';

    export function btnClicker(): ng.IDirective {
        return {
            restrict:'E',
            controller: emailEditorCtrl,
            scope: {},
            link: function(scope:IEMailScope, element:JQuery, attributes:any){
                console.log(scope.getEmailsCount);
            }

        };
    }
}

