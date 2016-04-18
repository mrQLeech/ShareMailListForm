/// <reference path='../_refs.ts' />


module emailEditorMod{
    'use strict';

    export interface IEMailScope extends ng.IScope {
        emails: IEMailCollection;
        mailStringStream: string;

        parseEmails(): void;
        getEmailsCount(): void;
        addEmails(): void;
        onKeyUp(event:KeyboardEvent): void;
    }
}