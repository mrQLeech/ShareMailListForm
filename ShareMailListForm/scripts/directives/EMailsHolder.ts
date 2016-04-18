/// <reference path="../_refs.ts" />

module emailEditorMod{
    'use strict'

    export function emailsHolder() : ng.IDirective{
        return{
            restrict: 'E',
            template: `
                <div class="ng-emails-holder">
                    <div class="ng-email-editor-title">Share "Board name" with others</div>
                    <emails-editor mails-collection="ctrl.mailList" ></emails-editor>
                    <button ng-click="ctrl.addEmails()" class="ng-emails-editor-button add-mails-button">Add email</button>
                    <button ng-click="ctrl.getEmailsCount()" class="ng-emails-editor-button get-count-button">Get emails count</button>

                </div>
            `,
            replace: true,
            controller: ['$scope',emailEditorCtrl],
            controllerAs: 'ctrl',
            scope: {}
        }
    }
}