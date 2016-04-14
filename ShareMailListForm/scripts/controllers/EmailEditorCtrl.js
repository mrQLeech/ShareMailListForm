/// <reference path='../_refs.ts' />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    var emailEditorCtrl = (function () {
        function emailEditorCtrl($scope) {
            this.$scope = $scope;
            this.mailList = [];
            this.addEMail("test1@t.ru");
            this.addEMail("test2@t.ru");
            this.addEMail("test3@t.ru");
        }
        emailEditorCtrl.prototype.addEMail = function (eMail) {
            if (eMail) {
                var mail = new emailEditorMod.EMailModel(eMail);
                if (this.mailList.indexOf(mail) < 0) {
                    this.mailList.push(mail);
                }
            }
            this.$scope.emails = this.mailList;
        };
        emailEditorCtrl.prototype.removeMail = function (eMail) {
            var mList = this.mailList;
            var rEl;
            for (var i = mList.length - 1; i >= 0; i--) {
                var el = mList[i];
                if (el.getMail() == eMail) {
                    this.mailList.slice(i);
                }
            }
            this.$scope.emails = this.mailList;
        };
        emailEditorCtrl.prototype.parseEmails = function (eMailString) {
        };
        emailEditorCtrl.$inject = [
            '$scope'
        ];
        return emailEditorCtrl;
    })();
    emailEditorMod.emailEditorCtrl = emailEditorCtrl;
})(emailEditorMod || (emailEditorMod = {}));
//# sourceMappingURL=EmailEditorCtrl.js.map