import React from "react";
import { ContentState, ContentBlock } from "draft-js";
import { WithStyles, Theme } from "@material-ui/core/styles";
interface IMediaProps extends WithStyles<typeof styles> {
    block: ContentBlock;
    contentState: ContentState;
    blockProps: any;
    onClick: (block: ContentBlock) => void;
}
declare const styles: ({ shadows }: Theme) => Record<"root" | "focused" | "centered" | "editable" | "leftAligned" | "rightAligned", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<IMediaProps>, "block" | "children" | "onClick" | "contentState" | "blockProps"> & import("@material-ui/core/styles").StyledComponentProps<"root" | "focused" | "centered" | "editable" | "leftAligned" | "rightAligned">>;
export default _default;
