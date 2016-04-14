/// <reference path='../_refs.ts' />


module emailEditorMod{
    'use strict';

    export class emailEditorCtrl{
        private mailList: EMailModel[];

        public static $inject = [
            '$scope'
        ];

         constructor(private $scope: IEMailScope){
            this.mailList = $scope =  [];
            this.addEMail("test1@t.ru");
            this.addEMail("test2@t.ru");
            this.addEMail("test3@t.ru");

        }

        addEMail(eMail:string){
            if (eMail){
                let mail = new EMailModel(eMail);
                if(this.mailList.indexOf(mail) < 0){
                    this.mailList.push(mail);
                }
            }
            this.$scope.emails = this.mailList;
        }

        removeMail(eMail:string){
            let mList = this.mailList;
            let rEl:IEMailItem;
            for (let i =  mList.length - 1; i >= 0; i--){
                let el = mList[i];
                if(el.getMail() == eMail){
                    this.mailList.slice(i);
                }
            }
            this.$scope.emails = this.mailList;
        }

        parseEmails(eMailString:string){

        }
    }
}