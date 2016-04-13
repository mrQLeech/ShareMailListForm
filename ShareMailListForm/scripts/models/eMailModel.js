/// <reference path='../_refs.ts' />
var EmailEditorMod;
(function (EmailEditorMod) {
    'use strict';
    class EMailModel {
        constructor(eMail) {
            this._eMail = eMail;
        }
        get() {
            return this._eMail;
        }
        isValid() {
            let regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return regExp.test(this._eMail);
        }
    }
    EmailEditorMod.EMailModel = EMailModel;
})(EmailEditorMod || (EmailEditorMod = {}));
//# sourceMappingURL=EMailModel.js.map