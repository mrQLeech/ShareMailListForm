/// <reference path='../_refs.ts' />
var EmailEditorMod;
(function (EmailEditorMod) {
    'use strict';
    class EmailEditorCtrl {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor($scope) {
            this.$scope = $scope;
            this.mailList = [];
            this.addEMail("test1@t.ru");
            this.addEMail("test2@t.ru");
            this.addEMail("test3@t.ru");
        }
        addEMail(eMail) {
            if (eMail) {
                let mail = new EmailEditorMod.EMailModel(eMail);
                if (this.mailList.indexOf(mail) < 0) {
                    this.mailList.push(mail);
                }
            }
            this.$scope.emails = this.mailList;
        }
        removeMail(eMail) {
            let mList = this.mailList;
            let rEl;
            for (let i = mList.length - 1; i >= 0; i--) {
                let el = mList[i];
                if (el.get() == eMail) {
                    this.mailList.slice(i);
                }
            }
            this.$scope.emails = this.mailList;
        }
        parseEmails(eMailString) {
        }
    }
    EmailEditorCtrl.$inject = [
        '$scope'
    ];
    EmailEditorMod.EmailEditorCtrl = EmailEditorCtrl;
})(EmailEditorMod || (EmailEditorMod = {}));
//# sourceMappingURL=EmailEditorCtrl.js.map