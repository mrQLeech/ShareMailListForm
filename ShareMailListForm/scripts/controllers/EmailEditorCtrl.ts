/// <reference path='../_refs.ts' />
///<reference path="../interfaces/IEMailScope.ts"/>


module emailEditorMod{
    'use strict';


    export class emailEditorCtrl{
        private mailList: EMailModel[];
        private inputText: string;

        public static $inject = [
            '$scope',
            'element',
            'attributes'
        ];

        constructor(private $scope: IEMailScope, element: JQuery, attributes: any){
            this.mailList = $scope.emails =  [];
            this.inputText = $scope.inputText = "";
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

        removeMail(mail:string): void{
            let mList = this.mailList;

            for (let i =  mList.length - 1; i >= 0; i--){
                let el = mList[i];
                if(el.getMail() == mail){
                    this.mailList.splice(i, 1);
                }
            }
        }

        parseEmails(){
            let str = this.inputText.replace(/,/g , "");
            let arr: string[] = this.inputText.split(" ");
            for (let i = 0; i < arr.length; i++){
                if (arr[i]) this.addEMail(arr[i]);
            }

            this.inputText = this.$scope.inputText =  "";
        }

        getEmailsCount(): void{
            alert('Count of emails: ' + this.mailList.length );
        }

        addRandEmail(): void{
            let res: string = "";

            let possibleSymb = "abcdefghijklmnopqrstuvwxyz";
            let possibleDomens = ["ru", "com", "org", "en", "ua", "net", "gov"];


            res += this.getRandString(possibleSymb, Math.floor(Math.random() * 14) + 1 ); // string must be more or equal than 1
            res += "@";
            res += this.getRandString(possibleSymb, Math.floor(Math.random() * 9) + 1);   // string must be more or equal than 1
            res += ".";
            res += this.getRandArrItem(possibleDomens);

            this.addEMail(res);
        }

        private getRandString(posibleSymb: string, resLength: number) : string {
            let res = "";
            let posLength = posibleSymb.length;
            for( let i = 0; i < resLength; i++ ){
                let ch = posibleSymb.charAt(Math.floor(Math.random() * posLength));
                res += ch;
            }

            return res;
        }

        private getRandArrItem (arr: string[]): string{
            return arr[Math.floor(Math.random() * arr.length)];
        }
    }
}