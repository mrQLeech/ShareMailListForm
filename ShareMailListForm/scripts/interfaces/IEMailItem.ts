/// <references path="../_refs.ts" />

module EmailEditorMod{
    export interface IEMailItem{
        get ():string;
        isValid(): boolean;
    }
}
