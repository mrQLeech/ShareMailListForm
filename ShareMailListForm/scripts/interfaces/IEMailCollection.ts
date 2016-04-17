/// <reference path='../_refs.ts' />



module emailEditorMod{
    'use strict';


    export interface IEMailCollection{
        mailList: EMailModel[];
        mailStringStream:string;

        addEMail(eMail:string): void;
        removeMail(mail:string): void;
        parseEmails(): void;
        getEmailsCount(): void;
        addEmails(): void;
        onKeyUp(event: KeyboardEvent): void;
    }
}