/// <reference path='../_refs.ts' />
var EmailEditorModule;
(function (EmailEditorModule) {
    'use strict';
    var EMailModel = (function () {
        function EMailModel(eMail) {
            this._eMail = eMail;
        }
        EMailModel.prototype.EMail = function () {
            return undefined;
        };
        EMailModel.prototype.isValid = function () {
            var regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return regExp.test(this._eMail);
        };
        return EMailModel;
    })();
    EmailEditorModule.EMailModel = EMailModel;
})(EmailEditorModule || (EmailEditorModule = {}));
//# sourceMappingURL=eMailModel.js.map