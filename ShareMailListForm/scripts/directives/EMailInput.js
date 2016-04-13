/// <reference path="../_refs.ts" />
var EmailEditorMod;
(function (EmailEditorMod) {
    'use strict';
    function eMailInput() {
        return {
            restrict: 'A',
            scope: {
                mailStr: "=mailinputvalue"
            }
        };
    }
    EmailEditorMod.eMailInput = eMailInput;
})(EmailEditorMod || (EmailEditorMod = {}));
//# sourceMappingURL=EMailInput.js.map