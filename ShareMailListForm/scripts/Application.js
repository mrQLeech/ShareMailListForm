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
            template: "\n\n            <div>\n\n                <div class=\"ng-email-editor-title\">Share \"Board name\" with others</div>\n                <div class=\"ng-mail-list\" >\n                    <div class=\"ng-mail-item\" ng-repeat=\"mail in emails\">\n                         <div class=\"ng-email-text\" >\n                             <span class='{{!mail.isValid() ? \"invalid\":\"\"}}'>\n                                 <span style=\"color:black;\">{{mail.getMail()}}</span>\n                             </span>\n                         </div>\n                         <div class=\"ng-email-btn-close\" ng-click='removeMail(mail.getMail())' >\n                         </div>\n                    </div>\n                    <textarea email-Input  class=\"ng-email-input\" ng-blur=\"parseEmails()\"\n                            placeholder=\"add more people...\" ng-model=\"inputText\" ng-keyup=\"keyUp($event)\" ></textarea>\n                </div>\n            </div>\n            ",
            replace: true,
            transclude: true,
            scope: {
                emails: "=mailsList",
                inputText: "=inputText"
            },
            link: function (scope, elemetn, attributes) {
                scope.removeMail = function (mail) {
                    scope.$parent.ctrl.removeMail(mail);
                };
                scope.parseEmails = function () {
                    var parent = scope.$parent.ctrl;
                    parent.inputText = scope.inputText;
                    scope.$parent.ctrl.parseEmails();
                    scope.inputText = "";
                };
                scope.keyUp = function (event) {
                    if (event.code === "Comma" || event.code === "Enter") {
                        scope.parseEmails();
                    }
                };
            }
        };
    }
    emailEditorMod.emailsEditor = emailsEditor;
})(emailEditorMod || (emailEditorMod = {}));
/// <reference path="../_refs.ts" />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    function btnClicker() {
        return {
            restrict: 'E',
            controller: emailEditorMod.emailEditorCtrl,
            scope: {},
            link: function (scope, element, attributes) {
                console.log(scope.getEmailsCount);
            }
        };
    }
    emailEditorMod.btnClicker = btnClicker;
})(emailEditorMod || (emailEditorMod = {}));
/// <reference path='../_refs.ts' />
///<reference path="../interfaces/IEMailScope.ts"/>
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    var emailEditorCtrl = (function () {
        function emailEditorCtrl($scope, element, attributes) {
            this.$scope = $scope;
            this.mailList = $scope.emails = [];
            this.inputText = $scope.inputText = "";
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
        emailEditorCtrl.prototype.removeMail = function (mail) {
            var mList = this.mailList;
            for (var i = mList.length - 1; i >= 0; i--) {
                var el = mList[i];
                if (el.getMail() == mail) {
                    this.mailList.splice(i, 1);
                }
            }
        };
        emailEditorCtrl.prototype.parseEmails = function () {
            var str = this.inputText.replace(/,/g, "");
            var arr = this.inputText.split(" ");
            for (var i = 0; i < arr.length; i++) {
                if (arr[i])
                    this.addEMail(arr[i]);
            }
            this.inputText = this.$scope.inputText = "";
        };
        emailEditorCtrl.prototype.getEmailsCount = function () {
            alert('Count of emails: ' + this.mailList.length);
        };
        emailEditorCtrl.prototype.addRandEmail = function () {
            var res = "";
            var possibleSymb = "abcdefghijklmnopqrstuvwxyz";
            var possibleDomens = ["ru", "com", "org", "en", "ua", "net", "gov"];
            res += this.getRandString(possibleSymb, Math.floor(Math.random() * 14) + 1);
            res += "@";
            res += this.getRandString(possibleSymb, Math.floor(Math.random() * 9) + 1);
            res += ".";
            res += this.getRandArrItem(possibleDomens);
            this.addEMail(res);
        };
        emailEditorCtrl.prototype.getRandString = function (posibleSymb, resLength) {
            var res = "";
            var posLength = posibleSymb.length;
            for (var i = 0; i < resLength; i++) {
                var ch = posibleSymb.charAt(Math.floor(Math.random() * posLength));
                res += ch;
            }
            return res;
        };
        emailEditorCtrl.prototype.getRandArrItem = function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        };
        emailEditorCtrl.$inject = [
            '$scope',
            'element',
            'attributes'
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
/// <reference path='./directives/btnClicker.ts' />
/// <reference path='./controllers/EmailEditorCtrl.ts' />
/// <reference path='Application.ts' />
/// <reference path='_refs.ts' />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    var testApp = angular.module('apps', ['ngRoute'])
        .controller('emailEditorCtrl', ['$scope', emailEditorMod.emailEditorCtrl])
        .directive('emailsEditor', emailEditorMod.emailsEditor);
})(emailEditorMod || (emailEditorMod = {}));
//# sourceMappingURL=Application.js.map