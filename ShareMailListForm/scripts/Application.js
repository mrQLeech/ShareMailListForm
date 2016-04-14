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
            template: "\n            <div>\n                <div class=\"ng-email-editor-title\">Share \"Board name\" with others</div>\n\n                <div class=\"ng-mail-list\" > {{emails.getMail()}} </div>\n\n                <!--<div class=\"ng-mail-item\">\n                        <div class=\"ng-email-text\" >\n\n                          <!--  <span ng-style=\"email.isValid()?{}: {color : red; text-decoration : underline;}\">\n                                <span>{{email.get()}}</span>\n                            </span>-->\n                       <!-- </div>\n                        <div class=\"ng-email-btn-close\">\n                        </div>\n                    </div>-->\n\n                   <!-- <textarea email-Input mail-input-value=\"\" class=\"ng-email-input\"  placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B...\" ></textarea> -->\n            </div>\n            ",
            replace: true,
            scope: {
                emails: "="
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
            this.mailList = $scope = [];
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
        .controller('emailEditorCtrl', emailEditorMod.emailEditorCtrl);
})(emailEditorMod || (emailEditorMod = {}));
//# sourceMappingURL=Application.js.map