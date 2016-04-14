/// <reference path="../_refs.ts" />

module emailEditorMod{
    'use strict';

    export function eMailInput(): ng.IDirective {
        return {
            restrict:'A',
            scope: {
                mailStr:"=mailinputvalue"
            }

        };
    }
}