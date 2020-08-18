import React, { FunctionComponent } from "react";
import { WithStyles, Theme } from "@material-ui/core/styles";
import { EditorState, DraftHandleValue, SelectionState } from "draft-js";
import { TToolbarControl, TCustomControl, TToolbarButtonSize } from "./components/Toolbar";
import { TAutocompleteItem } from "./components/Autocomplete";
export declare type TDecorator = {
    component: FunctionComponent;
    regex: RegExp;
};
export declare type TAutocompleteStrategy = {
    triggerChar: string;
    items: TAutocompleteItem[];
    insertSpaceAfter?: boolean;
    atomicBlockName?: string;
};
export declare type TAutocomplete = {
    strategies: TAutocompleteStrategy[];
    suggestLimit?: number;
};
export declare type TAsyncAtomicBlockResponse = {
    data: any;
};
export declare type TMUIRichTextEditorRef = {
    focus: () => void;
    save: () => void;
    /**
     * @deprecated Use `insertAtomicBlockSync` instead.
     */
    insertAtomicBlock: (name: string, data: any) => void;
    insertAtomicBlockSync: (name: string, data: any) => void;
    insertAtomicBlockAsync: (name: string, promise: Promise<TAsyncAtomicBlockResponse>, placeholder?: string) => void;
};
export declare type TDraftEditorProps = {
    spellCheck?: boolean;
    stripPastedStyles?: boolean;
    handleDroppedFiles?: (selectionState: SelectionState, files: Blob[]) => DraftHandleValue;
};
export declare type TKeyCommand = {
    key: number;
    name: string;
    callback: (state: EditorState) => EditorState;
};
export declare type TMUIRichTextEditorProps = {
    id?: string;
    /**
     * @deprecated Use `defaultValue` instead.
     */
    value?: any;
    defaultValue?: any;
    label?: string;
    readOnly?: boolean;
    inheritFontSize?: boolean;
    error?: boolean;
    controls?: Array<TToolbarControl>;
    customControls?: TCustomControl[];
    decorators?: TDecorator[];
    toolbar?: boolean;
    toolbarButtonSize?: TToolbarButtonSize;
    inlineToolbar?: boolean;
    inlineToolbarControls?: Array<TToolbarControl>;
    draftEditorProps?: TDraftEditorProps;
    keyCommands?: TKeyCommand[];
    maxLength?: number;
    autocomplete?: TAutocomplete;
    onSave?: (data: string) => void;
    onChange?: (state: EditorState) => void;
    onFocus?: () => void;
    onBlur?: () => void;
};
interface IMUIRichTextEditorProps extends TMUIRichTextEditorProps, WithStyles<typeof styles> {
}
declare const styles: ({ spacing, typography, palette }: Theme) => Record<"error" | "toolbar" | "root" | "container" | "linkPopover" | "linkTextField" | "inheritFontSize" | "editor" | "editorContainer" | "editorReadOnly" | "hidePlaceholder" | "placeHolder" | "anchorLink" | "inlineToolbar", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<Pick<IMUIRichTextEditorProps & React.RefAttributes<TMUIRichTextEditorRef>, "error" | "label" | "toolbar" | "ref" | "key" | "defaultValue" | "id" | "onFocus" | "onBlur" | "onChange" | "value" | "readOnly" | "inheritFontSize" | "inlineToolbar" | "controls" | "customControls" | "decorators" | "toolbarButtonSize" | "inlineToolbarControls" | "draftEditorProps" | "keyCommands" | "maxLength" | "autocomplete" | "onSave"> & import("@material-ui/core/styles").StyledComponentProps<"error" | "toolbar" | "root" | "container" | "linkPopover" | "linkTextField" | "inheritFontSize" | "editor" | "editorContainer" | "editorReadOnly" | "hidePlaceholder" | "placeHolder" | "anchorLink" | "inlineToolbar">>;
export default _default;
