/// <reference path='../_refs.ts' />


module emailEditorMod{
    'use strict';


    export class emailEditorCtrl{
        private mailList: EMailModel[];

        public static $inject = [
            '$scope'
        ];

        constructor(private $scope: IEMailScope){
             this.mailList = $scope.emails =  [];
             this.addEMail("test1@t.ru");
             this.addEMail("test2");
             this.addEMail("test3@t.ru");
        }

        addEMail(eMail:string): void{
            if (eMail){
                let mail = new EMailModel(eMail);
                if(this.mailList.indexOf(mail) < 0){
                    this.mailList.push(mail);
                }
            }
            this.$scope.emails = this.mailList;
        }

        removeMail(eMail:string): void{
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

        getEmailsCount(): void{
            alert('Count of emails: ' + this.mailList.length );
        }

        addRandEmail(): void{
            var res: string;

            var possibleSymb = "abcdefghijklmnopqrstuvwxyz";
            var possibleDomens = ["ru", "com", "org", "en", "ua", "net", "gov"];


            res += this.getRandString(possibleSymb, Math.floor(Math.random() * 14) + 1 ); // string must be more or equal than 1
            res += "@";
            res += this.getRandString(possibleSymb, Math.floor(Math.random() * 9) + 1);   // string must be more or equal than 1
            res += ".";
            res += this.getRandArrItem(possibleDomens);

            this.mailList.push(new EMailModel(res));
        }

        private getRandString(posibleSymb: string, resLength: number) : string {
            var res = "";
            var posLength = posibleSymb.length;
            for( var i = 0; i < resLength; i++ ){
                var ch = posibleSymb.charAt(Math.floor(Math.random() * posLength));
                res += ch;
            }

            return res;
        }

        private getRandArrItem (arr: string[]): string{
            return arr[Math.floor(Math.random() * arr.length)];
        }
    }
}