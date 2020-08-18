import React from "react";
import { WithStyles, Theme } from "@material-ui/core/styles";
export declare type TAlignment = "left" | "center" | "right";
export declare type TMediaType = "image" | "video";
export declare type TUrlData = {
    url?: string;
    width?: number;
    height?: number;
    alignment?: TAlignment;
    type?: TMediaType;
};
interface IUrlPopoverStateProps extends WithStyles<typeof styles> {
    anchor?: HTMLElement;
    data?: TUrlData;
    isMedia?: boolean;
    onConfirm: (isMedia?: boolean, ...args: any) => void;
}
declare const styles: ({ spacing }: Theme) => Record<"linkPopover" | "linkTextField", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<IUrlPopoverStateProps>, "anchor" | "data" | "children" | "isMedia" | "onConfirm"> & import("@material-ui/core/styles").StyledComponentProps<"linkPopover" | "linkTextField">>;
export default _default;
