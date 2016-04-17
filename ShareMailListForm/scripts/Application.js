/// <reference path="../_refs.ts" />
/// <reference path='../_refs.ts' />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
})(emailEditorMod || (emailEditorMod = {}));
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
            template: "\n            <div class=\"ng-email-editor\">\n                <div class=\"ng-email-editor-title\">Share \"Board name\" with others</div>\n                <div class=\"ng-mail-list\" >\n                    <div class=\"ng-mail-item\" ng-repeat=\"mail in emails.mailList\" title=\"{{mail.getMail()}}\">\n                         <div class=\"ng-email-text\"  >\n                             <span class='{{!mail.isValid() ? \"invalid\":\"\"}}'>\n                                 <span style=\"color:black;\">{{mail.getMail()}}</span>\n                             </span>\n                         </div>\n                         <div class=\"ng-email-btn-close\" ng-click='emails.removeMail(mail.getMail())' ></div>\n                    </div>\n                    <textarea email-Input  class=\"ng-email-input\" ng-blur=\"emails.parseEmails()\"\n                            placeholder=\"add more people...\" ng-model=\"emails.mailStringStream\" ng-keyup=\"emails.onKeyUp($event)\" ></textarea>\n                </div>\n            </div>\n            ",
            replace: true,
            scope: {
                emails: "=mailsCollection"
            },
            link: function (scope, elemetn, attributes) {
            }
        };
    }
    emailEditorMod.emailsEditor = emailsEditor;
})(emailEditorMod || (emailEditorMod = {}));
/// <reference path="../_refs.ts" />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    function emailsHolder() {
        return {
            restrict: 'E',
            template: "\n                <div class=\"ng-emails-holder\">\n                    <emails-editor mails-collection=\"ctrl.mailList\" ></emails-editor>\n                    <button ng-click=\"ctrl.mailList.addEmails()\" class=\"ng-emails-editor-button add-mails-button\">Add email</button>\n                    <button ng-click=\"ctrl.mailList.getEmailsCount()\" class=\"ng-emails-editor-button get-count-button\">Get emails count</button>\n\n                </div>\n            ",
            replace: true,
            controller: ['$scope', emailEditorMod.emailEditorCtrl],
            controllerAs: 'ctrl',
            scope: {}
        };
    }
    emailEditorMod.emailsHolder = emailsHolder;
})(emailEditorMod || (emailEditorMod = {}));
/// <reference path='../_refs.ts' />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    var EMailCollection = (function () {
        function EMailCollection() {
            this.mailList = [];
            this.mailStringStream = "";
        }
        EMailCollection.prototype.addEMail = function (eMail) {
            if (eMail) {
                var mail = new emailEditorMod.EMailModel(eMail);
                if (this.mailList.indexOf(mail) < 0) {
                    this.mailList.push(mail);
                }
            }
        };
        EMailCollection.prototype.removeMail = function (mail) {
            var mList = this.mailList;
            for (var i = mList.length - 1; i >= 0; i--) {
                var el = mList[i];
                if (el.getMail() === mail) {
                    this.mailList.splice(i, 1);
                }
            }
        };
        EMailCollection.prototype.parseEmails = function () {
            if (this.mailStringStream === "")
                return;
            var str = this.mailStringStream.replace(/,/g, "");
            var arr = str.split(" ");
            for (var i = 0; i < arr.length; i++) {
                if (arr[i])
                    this.addEMail(arr[i]);
            }
            this.mailStringStream = "";
        };
        EMailCollection.prototype.getEmailsCount = function () {
            alert('Count of emails: ' + this.mailList.length);
        };
        EMailCollection.prototype.addEmails = function () {
            var res = "";
            var possibleSymb = "abcdefghijklmnopqrstuvwxyz";
            var possibleDomains = ["ru", "com", "org", "en", "ua", "net", "gov"];
            res += this.getRandString(possibleSymb, Math.floor(Math.random() * 14) + 1);
            res += "@";
            res += this.getRandString(possibleSymb, Math.floor(Math.random() * 9) + 1);
            res += ".";
            res += this.getRandArrItem(possibleDomains);
            this.addEMail(res);
        };
        EMailCollection.prototype.onKeyUp = function (event) {
            var key = event.which;
            key = (key && key > 0) ? key : key = event.keyCode;
            key = (key && key > 0) ? key : key = event.charCode;
            if (key === 188 || key === 13) {
                this.parseEmails();
            }
        };
        EMailCollection.prototype.getRandString = function (posibleSymb, resLength) {
            var res = "";
            var posLength = posibleSymb.length;
            for (var i = 0; i < resLength; i++) {
                var ch = posibleSymb.charAt(Math.floor(Math.random() * posLength));
                res += ch;
            }
            return res;
        };
        EMailCollection.prototype.getRandArrItem = function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        };
        return EMailCollection;
    })();
    emailEditorMod.EMailCollection = EMailCollection;
})(emailEditorMod || (emailEditorMod = {}));
/// <reference path='../_refs.ts' />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    var emailEditorCtrl = (function () {
        function emailEditorCtrl($scope) {
            this.$scope = $scope;
            this.mailList = new emailEditorMod.EMailCollection();
        }
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
/// <reference path='./interfaces/IEMailCollection.ts' />
/// <reference path='./models/EMailModel.ts' />
/// <reference path='./directives/EmailsEditor.ts' />
/// <reference path='./directives/EMailsHolder.ts' />
/// <reference path='./controllers/EMailCollection.ts' />
/// <reference path='./controllers/EmailEditorCtrl.ts' />
/// <reference path='Application.ts' />
/// <reference path='_refs.ts' />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    var testApp = angular.module('apps', ['ngRoute'])
        .controller('emailEditorCtrl', ['$scope', emailEditorMod.emailEditorCtrl])
        .directive('emailsHolder', emailEditorMod.emailsHolder)
        .directive('emailsEditor', emailEditorMod.emailsEditor);
})(emailEditorMod || (emailEditorMod = {}));
//# sourceMappingURL=Application.js.map