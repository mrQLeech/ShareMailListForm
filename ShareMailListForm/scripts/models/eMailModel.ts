/// <reference path='../_refs.ts' />

module emailEditorMod{
    'use strict';


    export class EMailModel implements IEMailItem{

        private _eMail : string;
        getMail():string {
            return this._eMail;
        }

        constructor(eMail : string){
             this._eMail = eMail;
        }

        isValid():boolean {

            var regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return regExp.test(this._eMail);
        }

    }


}