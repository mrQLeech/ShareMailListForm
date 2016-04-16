/// <reference path="../_refs.ts" />

module emailEditorMod{
    'use strict';

    export function emailsEditor(): ng.IDirective {
        return {
            restrict:'E',
            template: `

            <div>

                <div class="ng-email-editor-title">Share "Board name" with others</div>
                <div class="ng-mail-list" >
                    <div class="ng-mail-item" ng-repeat="mail in emails">
                         <div class="ng-email-text" >
                             <span class='{{!mail.isValid() ? "invalid":""}}'>
                                 <span style="color:black;">{{mail.getMail()}}</span>
                             </span>
                         </div>
                         <div class="ng-email-btn-close" ng-click='removeMail(mail.getMail())' >
                         </div>
                    </div>
                    <textarea email-Input  class="ng-email-input" ng-blur="parseEmails()"
                            placeholder="add more people..." ng-model="inputText" ng-keyup="keyUp($event)" ></textarea>
                </div>
            </div>
            `,
            replace: true,
            transclude: true,
            scope: {
                emails: "=mailsList",
                inputText: "=inputText"

            },
            link: function(scope:IEMailScope, elemetn, attributes){
                scope.removeMail = function (mail) {
                    scope.$parent.ctrl.removeMail(mail);
                }

                scope.parseEmails = function(){
                    let parent = scope.$parent.ctrl;
                    parent.inputText = scope.inputText;
                    scope.$parent.ctrl.parseEmails();
                    scope.inputText = "";
                }

                scope.keyUp = function(event){
                    if (event.code === "Comma" || event.code === "Enter"){
                        scope.parseEmails();
                    }
                }


            }
        };
    }
}

