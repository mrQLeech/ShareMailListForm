/// <reference path='../_refs.ts' />
/**
 * Created by Krasnov on 13.04.2016 1:18.
 */
var EmailEditorModule;
(function (EmailEditorModule) {
    'use strict';
    var EmailEditorCtrl = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function EmailEditorCtrl($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
        }
        EmailEditorCtrl.$inject = [
            '$scope',
            '$location'
        ];
        return EmailEditorCtrl;
    })();
    EmailEditorModule.EmailEditorCtrl = EmailEditorCtrl;
})(EmailEditorModule || (EmailEditorModule = {}));
//# sourceMappingURL=EmailEditorCtrl.js.map