/// <reference path="../_refs.ts" />

module emailEditorMod{
    'use strict';

    export function emailsEditor(): ng.IDirective {
        return {
            restrict:'E',
            template: `
            <div>
                <div class="ng-email-editor-title">Share "Board name" with others</div>

                <div class="ng-mail-list" > {{emails.getMail()}} </div>

                <!--<div class="ng-mail-item">
                        <div class="ng-email-text" >

                          <!--  <span ng-style="email.isValid()?{}: {color : red; text-decoration : underline;}">
                                <span>{{email.get()}}</span>
                            </span>-->
                       <!-- </div>
                        <div class="ng-email-btn-close">
                        </div>
                    </div>-->

                   <!-- <textarea email-Input mail-input-value="" class="ng-email-input"  placeholder="Введите адрес электронной почты..." ></textarea> -->
            </div>
            `,
            replace: true,
            scope: {
                emails: "="
            }

        };
    }
}