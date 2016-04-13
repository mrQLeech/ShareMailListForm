/// <reference path='../_refs.ts' />


module EmailEditorMod{
    'use strict';

    export interface IEMailScope extends ng.IScope {
        emails: IEMailItem[];
        textArea:string;
    }
}