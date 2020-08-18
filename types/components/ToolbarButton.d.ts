import { FunctionComponent } from "react";
import { TToolbarComponentProps, TToolbarButtonSize } from "./Toolbar";
interface IToolbarButtonProps {
    id?: string;
    editorId?: string;
    label: string;
    style: string;
    type: string;
    active?: boolean;
    icon?: JSX.Element;
    onClick?: any;
    inlineMode?: boolean;
    disabled?: boolean;
    size?: TToolbarButtonSize;
    component?: FunctionComponent<TToolbarComponentProps>;
}
declare const ToolbarButton: FunctionComponent<IToolbarButtonProps>;
export default ToolbarButton;
