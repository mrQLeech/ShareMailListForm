/// <reference path='../_refs.ts' />

module emailEditorMod{
    'use strict';

    /**
     * Object to use in directive hierarchy
     */
    export class EMailCollection implements IEMailCollection{

        mailList: EMailModel[];


        constructor(){
            this.mailList = [];
        }

        addEMail(eMail:string): void{
            if (eMail){
                let mail = new EMailModel(eMail);
                if(this.mailList.indexOf(mail) < 0){
                    this.mailList.push(mail);
                }
            }
        }

        removeMail(mail:string): void{
            let mList = this.mailList;

            for (let i =  mList.length - 1; i >= 0; i--){
                let el = mList[i];
                if(el.getMail() === mail){
                    this.mailList.splice(i, 1);
                }
            }
        }

        length():number {
            return this.mailList.length;
        }

    }
}