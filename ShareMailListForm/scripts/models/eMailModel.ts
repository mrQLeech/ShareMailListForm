/// <reference path='../_refs.ts' />

module EmailEditorMod{
    'use strict';


    export class EMailModel implements IEMailItem{
        private _eMail : string;
        get():string {
            return this._eMail;
        }

        constructor(eMail : string){
             this._eMail = eMail;
        }

        isValid():boolean {

            let regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return regExp.test(this._eMail);
        }

    }


}