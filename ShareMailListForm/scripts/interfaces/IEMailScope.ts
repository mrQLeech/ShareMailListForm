/// <reference path='../_refs.ts' />


module emailEditorMod{
    'use strict';

    export interface IEMailScope extends ng.IScope {
        emails: IEMailItem[];
        inputText:string;
        getEmailsCount();
        addRandEmail();
        removeMail(mail:string):void;
        parseEmails();

    }
}