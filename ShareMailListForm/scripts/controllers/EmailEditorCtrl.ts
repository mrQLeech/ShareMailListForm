/// <reference path='../_refs.ts' />



module emailEditorMod{
    'use strict';


    export class emailEditorCtrl{
        mailList: IEMailCollection;
        mailStringStream:string;

        public static $inject = [
            '$scope'
        ];

        constructor(private $scope: IEMailScope){
            this.mailList = new EMailCollection();
            this.mailStringStream = "";
        }

        parseEmails(){
            let mList = this.mailList;
            if (this.mailStringStream === "") return;

            let str = this.mailStringStream.replace(/,/g , "");
            let arr: string[] = str.split(" ");
            for (let i = 0; i < arr.length; i++){
                if (arr[i]) mList.addEMail(arr[i]);
            }

            this.mailStringStream = "";
        }

        getEmailsCount(): void{
            alert('Count of emails: ' + this.mailList.length() );
        }

        addEmails(): void{
            let mList = this.mailList;
            let res: string = "";

            let possibleSymb = "abcdefghijklmnopqrstuvwxyz";
            let possibleDomains = ["ru", "com", "org", "en", "ua", "net", "gov"];

            res += this.getRandString(possibleSymb, Math.floor(Math.random() * 14) + 1 ); // string must be more or equal than 1
            res += "@";
            res += this.getRandString(possibleSymb, Math.floor(Math.random() * 9) + 1);   // string must be more or equal than 1
            res += ".";
            res += this.getRandArrItem(possibleDomains);

            mList.addEMail(res);
        }

        onKeyUp(event: KeyboardEvent): void {
            let key = event.which;
            //to compability with brawsers ie<9/opera
            key = (key && key > 0)? key : key = event.keyCode;
            key = (key && key > 0)? key : key = event.charCode;

            if (key === 188 || key === 13){ //to KeyUp event. key: 188 = ","; key: 13 = "Enter"
                this.parseEmails();
            }
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