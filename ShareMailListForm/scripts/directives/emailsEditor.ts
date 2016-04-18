/// <reference path="../_refs.ts" />

module emailEditorMod{
    'use strict';

    export function emailsEditor(): ng.IDirective {
        return {
            restrict:'E',
            template: `
            <div class="ng-email-editor">

                <div class="ng-mail-list" >
                    <div class="ng-mail-item" ng-repeat="mail in emails.mailList" title="{{mail.getMail()}}">
                         <div class="ng-email-text"  >
                             <span class='{{!mail.isValid() ? "invalid":""}}'>
                                 <span style="color:black;">{{mail.getMail()}}</span>
                             </span>
                         </div>
                         <div class="ng-email-btn-close" ng-click='emails.removeMail(mail.getMail())' ></div>
                    </div>
                    <textarea email-Input  class="ng-email-input" ng-blur="ctrl.parseEmails()"
                            placeholder="add more people..." ng-model="ctrl.mailString" ng-keyup="ctrl.onKeyUp($event)" ></textarea>
                </div>
            </div>
            `,
            replace: true,
            scope: {
                emails: "=mailsCollection",
                mailString: "=mailsInput"
            },
            controller: ['$scope', emailEditorCtrl],
            controllerAs: 'ctrl',
            link: function(scope:IEMailScope, elemetn, attributes, ctrl){
                console.log(scope)
            }
        };
    }
}

