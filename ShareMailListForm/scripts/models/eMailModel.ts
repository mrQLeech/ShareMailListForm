/// <reference path='../_app.ts' />

module testAppModule{

    'use strict';


    interface IEMailItem{
         isValid() : boolean;
    }

    class EMailModel implements IEMailItem{
        _eMail : string;

        EMail() : string {
            return undefined;
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