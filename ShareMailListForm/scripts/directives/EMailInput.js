/// <reference path="../_refs.ts" />
var emailEditorMod;
(function (emailEditorMod) {
    'use strict';
    function eMailInput() {
        return {
            restrict: 'A',
            scope: {
                mailStr: "=mailinputvalue"
            }
        };
    }
    emailEditorMod.eMailInput = eMailInput;
})(emailEditorMod || (emailEditorMod = {}));
//# sourceMappingURL=EMailInput.js.map