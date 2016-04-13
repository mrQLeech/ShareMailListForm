/// <reference path='../_refs.ts' />

module EmailEditorModule{
    'use strict';


    export class EMailModel implements IEMailItem{
        _eMail : string;

        constructor(eMail : string){
             this._eMail = eMail;
        }

        isValid():boolean {

            let regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return regExp.test(this._eMail);
        }

    }


}