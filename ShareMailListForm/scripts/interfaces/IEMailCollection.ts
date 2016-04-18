/// <reference path='../_refs.ts' />



module emailEditorMod{
    'use strict';


    export interface IEMailCollection{
        mailList: EMailModel[];

        addEMail(eMail:string): void;
        removeMail(mail:string): void;
        length():number;
    }
}