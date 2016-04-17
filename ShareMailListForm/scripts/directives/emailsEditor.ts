/// <reference path="../_refs.ts" />

module emailEditorMod{
    'use strict';

    export function emailsEditor(): ng.IDirective {
        return {
            restrict:'E',
            template: `
            <div class="ng-email-editor">
                <div class="ng-email-editor-title">Share "Board name" with others</div>
                <div class="ng-mail-list" >
                    <div class="ng-mail-item" ng-repeat="mail in emails.mailList" title="{{mail.getMail()}}">
                         <div class="ng-email-text"  >
                             <span class='{{!mail.isValid() ? "invalid":""}}'>
                                 <span style="color:black;">{{mail.getMail()}}</span>
                             </span>
                         </div>
                         <div class="ng-email-btn-close" ng-click='emails.removeMail(mail.getMail())' ></div>
                    </div>
                    <textarea email-Input  class="ng-email-input" ng-blur="emails.parseEmails()"
                            placeholder="add more people..." ng-model="emails.mailStringStream" ng-keyup="emails.onKeyUp($event)" ></textarea>
                </div>
            </div>
            `,
            replace: true,
            scope: {
                emails: "=mailsCollection"
            },
            link: function(scope:IEMailScope, elemetn, attributes){

            }
        };
    }
}

