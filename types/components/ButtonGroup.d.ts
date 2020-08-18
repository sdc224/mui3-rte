import React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
interface ButtonGroupProps {
    /**
     * The content of the button group.
     */
    children?: React.ReactNodeArray;
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css) below for more details.
     */
    classes?: any;
    /**
     * @ignore
     */
    className?: string;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "default" | "inherit" | "primary" | "secondary";
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component?: any;
    /**
     * If `true`, the buttons will be disabled.
     */
    disabled?: boolean;
    /**
     * If `true`, no elevation is used.
     */
    disableElevation?: boolean;
    /**
     * If `true`, the button keyboard focus ripple will be disabled.
     */
    disableFocusRipple?: boolean;
    /**
     * If `true`, the button ripple effect will be disabled.
     */
    disableRipple?: boolean;
    /**
     * If `true`, the buttons will take up the full width of its container.
     */
    fullWidth?: boolean;
    /**
     * The group orientation (layout flow direction).
     */
    orientation?: "horizontal" | "vertical";
    /**
     * The size of the button.
     * `small` is equivalent to the dense button styling.
     */
    size?: "large" | "medium" | "small";
    /**
     * The variant to use.
     */
    variant?: "contained" | "outlined" | "text";
}
export declare const styles: (theme: Theme) => Record<"disabled" | "vertical" | "root" | "contained" | "fullWidth" | "disableElevation" | "grouped" | "groupedHorizontal" | "groupedVertical" | "groupedText" | "groupedTextHorizontal" | "groupedTextVertical" | "groupedTextPrimary" | "groupedTextSecondary" | "groupedOutlined" | "groupedOutlinedHorizontal" | "groupedOutlinedVertical" | "groupedOutlinedPrimary" | "groupedOutlinedSecondary" | "groupedContained" | "groupedContainedHorizontal" | "groupedContainedVertical" | "groupedContainedPrimary" | "groupedContainedSecondary", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<Pick<ButtonGroupProps & React.RefAttributes<unknown>, "disabled" | "color" | "size" | "ref" | "children" | "key" | "className" | "component" | "disableRipple" | "fullWidth" | "variant" | "orientation" | "disableElevation" | "disableFocusRipple"> & import("@material-ui/core/styles/withStyles").StyledComponentProps<"disabled" | "vertical" | "root" | "contained" | "fullWidth" | "disableElevation" | "grouped" | "groupedHorizontal" | "groupedVertical" | "groupedText" | "groupedTextHorizontal" | "groupedTextVertical" | "groupedTextPrimary" | "groupedTextSecondary" | "groupedOutlined" | "groupedOutlinedHorizontal" | "groupedOutlinedVertical" | "groupedOutlinedPrimary" | "groupedOutlinedSecondary" | "groupedContained" | "groupedContainedHorizontal" | "groupedContainedVertical" | "groupedContainedPrimary" | "groupedContainedSecondary">>;
export default _default;
