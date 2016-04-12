/// <reference path='../_app.ts' />


module testAppModule{
    'use strict';

    class IEMailItem{
        protected _eMail : string;
        get EMail():string {
            return this._eMail;
        }
        public isValid: boolean = function(){};
    }

    class EMailModel implements IEMailItem{
        constructor(eMail:string){
            _eMail = eMail;
        }

        public isValid: boolean = function(){
            this.EMail
        }
    }


}