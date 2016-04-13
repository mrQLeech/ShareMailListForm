/// <reference path='../_refs.ts' />


module EmailEditorMod{
    'use strict';

    export class EmailEditorCtrl{
        private mailList: EMailModel[];

        public static $inject = [
            '$scope'
        ];

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(private $scope: IEMailScope){
            this.mailList =  [];
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
                if(el.get() == eMail){
                    this.mailList.slice(i);
                }
            }
            this.$scope.emails = this.mailList;
        }

        parseEmails(eMailString:string){

        }
    }
}