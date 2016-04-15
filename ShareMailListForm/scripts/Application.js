/// <references path="../_refs.ts" />
/// <reference path='../_refs.ts' />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
})(emailEditorMod || (emailEditorMod = {}));
/// <reference path='../_refs.ts' />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    var EMailModel = (function () {
        function EMailModel(eMail) {
            this._eMail = eMail;
        }
        EMailModel.prototype.getMail = function () {
            return this._eMail;
        };
        EMailModel.prototype.isValid = function () {
            var regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return regExp.test(this._eMail);
        };
        return EMailModel;
    })();
    emailEditorMod.EMailModel = EMailModel;
})(emailEditorMod || (emailEditorMod = {}));
/// <reference path="../_refs.ts" />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    function emailsEditor() {
        return {
            restrict: 'E',
            template: "\n\n            <div>\n\n                <div class=\"ng-email-editor-title\">Share \"Board name\" with others</div>\n                <div class=\"ng-mail-list\" >\n                    <div class=\"ng-mail-item\" ng-repeat=\"mail in mails\">\n                         <div class=\"ng-email-text\" >\n                             <span style={{ mail.isValid()?'':'text-decoration:underline;color:red;' }}>\n                                 <span style=\"color:black;\">{{mail.getMail()}}</span>\n                             </span>\n                         </div>\n                         <div class=\"ng-email-btn-close\">\n                         </div>\n                    </div>\n                    <textarea email-Input mail-input-value=\"\" class=\"ng-email-input\" placeholder=\"add more people...\" ></textarea>\n                </div>\n            </div>\n            ",
            replace: true,
            controller: emailEditorMod.emailEditorCtrl,
            scope: {
                mails: "=mailslist"
            }
        };
    }
    emailEditorMod.emailsEditor = emailsEditor;
})(emailEditorMod || (emailEditorMod = {}));
/// <reference path='../_refs.ts' />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    var emailEditorCtrl = (function () {
        function emailEditorCtrl($scope) {
            this.$scope = $scope;
            this.mailList = $scope.emails = [];
            this.addEMail("test1@t.ru");
            this.addEMail("test2@t.ru");
            this.addEMail("test3@t.ru");
            $scope.emails = this.mailList;
            $scope.getEmailsCount = this.getEmailsCount;
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
        emailEditorCtrl.prototype.getEmailsCount = function () {
            alert('Count of emails: ' + this.mailList.length);
        };
        emailEditorCtrl.$inject = [
            '$scope'
        ];
        return emailEditorCtrl;
    })();
    emailEditorMod.emailEditorCtrl = emailEditorCtrl;
})(emailEditorMod || (emailEditorMod = {}));
/// <reference path='../libs/declaration/jquery/jquery.d.ts' />
/// <reference path='../libs/declaration/angular/angular.d.ts' />
/// <reference path='./interfaces/IEMailItem.ts' />
/// <reference path='./interfaces/IEMailScope.ts' />
/// <reference path='./models/EMailModel.ts' />
/// <reference path='./directives/emailsEditor.ts' />
/// <reference path='./controllers/EmailEditorCtrl.ts' />
/// <reference path='Application.ts' />
/// <reference path='_refs.ts' />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    var testApp = angular.module('apps', ['ngRoute'])
        .directive('emailsEditor', emailEditorMod.emailsEditor)
        .controller('emailEditorCtrl', emailEditorMod.emailEditorCtrl)
        .controller('button', emailEditorMod.emailEditorCtrl);
})(emailEditorMod || (emailEditorMod = {}));
/// <reference path="../_refs.ts" />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    function btnClicker() {
        return {
            restrict: 'E',
            controller: emailEditorMod.emailEditorCtrl,
            scope: {}
        };
    }
    emailEditorMod.btnClicker = btnClicker;
})(emailEditorMod || (emailEditorMod = {}));
//# sourceMappingURL=Application.js.map