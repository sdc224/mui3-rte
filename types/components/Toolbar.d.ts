import React, { FunctionComponent } from "react";
import { EditorState } from "draft-js";
export declare type TToolbarControl = "title" | "bold" | "italic" | "underline" | "link" | "numberList" | "bulletList" | "quote" | "code" | "clear" | "save" | "media" | "strikethrough" | "highlight" | string;
export declare type TControlType = "inline" | "block" | "callback" | "atomic";
export declare type TToolbarButtonSize = "small" | "medium";
export declare type TToolbarComponentProps = {
    id: string;
    onMouseDown: (e: React.MouseEvent) => void;
    active: boolean;
    disabled: boolean;
};
export declare type TCustomControl = {
    id?: string;
    name: string;
    icon?: JSX.Element;
    type: TControlType;
    component?: FunctionComponent<TToolbarComponentProps>;
    inlineStyle?: React.CSSProperties;
    blockWrapper?: React.ReactElement;
    atomicComponent?: FunctionComponent;
    onClick?: (editorState: EditorState, name: string, anchor: HTMLElement | null) => EditorState | void;
};
declare type TToolbarProps = {
    id: string;
    editorState: EditorState;
    controls?: Array<TToolbarControl>;
    customControls?: TCustomControl[];
    onClick: (style: string, type: string, id: string, inlineMode?: boolean) => void;
    inlineMode?: boolean;
    className?: string;
    disabled?: boolean;
    size?: TToolbarButtonSize;
};
declare const Toolbar: FunctionComponent<TToolbarProps>;
export default Toolbar;
