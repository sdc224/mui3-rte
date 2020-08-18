import React from "react";
import { WithStyles, Theme } from "@material-ui/core/styles";
declare const styles: ({ spacing, palette }: Theme) => Record<"root", import("@material-ui/core/styles/withStyles").CSSProperties>;
interface IBlockquoteProps extends WithStyles<typeof styles> {
    children?: React.ReactNode;
}
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<IBlockquoteProps>, "children"> & import("@material-ui/core/styles").StyledComponentProps<"root">>;
export default _default;
