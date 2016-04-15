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
                    <div class="ng-mail-item" ng-repeat="mail in mails">
                         <div class="ng-email-text" >
                             <span style='{{mail.isValid() ? "":"text-decoration:underline;color:red;text-decoration-style:wavy;-moz-text-decoration-style: wavy;"}}'>
                                 <span style="color:black;">{{mail.getMail()}}</span>
                             </span>
                         </div>
                         <div class="ng-email-btn-close">
                         </div>
                    </div>
                    <textarea email-Input mail-input-value="" class="ng-email-input" placeholder="add more people..." ></textarea>
                </div>
            </div>
            `,
            replace: true,
            controller: emailEditorCtrl,
            scope: {
                mails: "=mailslist"
            }
        };
    }
}

