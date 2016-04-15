/// <reference path="../_refs.ts" />

module emailEditorMod{
    'use strict';

    export function btnClicker(): ng.IDirective {
        return {
            restrict:'E',
            controller: emailEditorCtrl,
            scope: {
            }
        };
    }
}

