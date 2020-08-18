import { EditorState, DraftBlockType, ContentBlock, ContentState, DraftStyleMap } from "draft-js";
import Immutable from "immutable";
import { TCustomControl } from "../components/Toolbar";
export declare type TSelectionInfo = {
    inlineStyle: Immutable.OrderedSet<string>;
    blockType: DraftBlockType;
    entityType: string;
    linkKey: string;
    block: ContentBlock;
};
/**
 * Get the current selection details
 */
declare const getSelectionInfo: (editorState: EditorState) => TSelectionInfo;
/**
 * Remove a block from the ContentState
 */
declare const removeBlockFromMap: (editorState: EditorState, block: ContentBlock) => ContentState;
declare const atomicBlockExists: (name: string, controls?: TCustomControl[] | undefined) => TCustomControl | undefined;
declare const isGreaterThan: (value: number, maxValue?: number | undefined) => boolean;
declare const clearInlineStyles: (editorState: EditorState, customStyles?: DraftStyleMap | undefined) => ContentState;
declare const getEditorBounds: any;
declare const getLineNumber: (editorState: EditorState) => number;
export { getSelectionInfo, removeBlockFromMap, atomicBlockExists, isGreaterThan, clearInlineStyles, getEditorBounds, getLineNumber };
