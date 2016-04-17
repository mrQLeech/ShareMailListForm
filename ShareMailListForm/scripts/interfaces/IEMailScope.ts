/// <reference path='../_refs.ts' />


module emailEditorMod{
    'use strict';

    export interface IEMailScope extends ng.IScope {
        emails: IEMailCollection;
    }
}