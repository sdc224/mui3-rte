import React from "react";
import { WithStyles } from "@material-ui/core/styles";
export declare type TAutocompleteItem = {
    keys: string[];
    value: any;
    content: string | JSX.Element;
};
interface TAutocompleteProps extends WithStyles<typeof styles> {
    items: TAutocompleteItem[];
    top: number;
    left: number;
    selectedIndex: number;
    onClick: (selectedIndex: number) => void;
}
declare const styles: () => Record<"container" | "item", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<TAutocompleteProps>, "left" | "top" | "children" | "onClick" | "items" | "selectedIndex"> & import("@material-ui/core/styles").StyledComponentProps<"container" | "item">>;
export default _default;
