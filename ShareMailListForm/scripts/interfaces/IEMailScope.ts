/// <reference path='../_refs.ts' />


module EmailEditorModule{
    'use strict';

    export interface IEMailScope extends ng.IScope {
        emails: IEMailItem[];
        location: ng.ILocationService;
        valid: boolean;
    }
}