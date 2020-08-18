import React from "react";
import classNames from "classNames";
// import { isFragment } from "react-is";
import capitalize from "../utils/capitalize";
import { fade } from "../utils/colorManipulator";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
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

export const styles = (theme: Theme) =>
	createStyles({
		/* Styles applied to the root element. */
		root: {
			display: "inline-flex",
			borderRadius: theme.shape.borderRadius
		},
		/* Styles applied to the root element if `variant="contained"`. */
		contained: {
			boxShadow: theme.shadows[2]
		},
		/* Styles applied to the root element if `disableElevation={true}`. */
		disableElevation: {
			boxShadow: "none"
		},
		/* Pseudo-class applied to child elements if `disabled={true}`. */
		disabled: {},
		/* Styles applied to the root element if `fullWidth={true}`. */
		fullWidth: {
			width: "100%"
		},
		/* Styles applied to the root element if `orientation="vertical"`. */
		vertical: {
			flexDirection: "column"
		},
		/* Styles applied to the children. */
		grouped: {
			minWidth: 40
		},
		/* Styles applied to the children if `orientation="horizontal"`. */
		groupedHorizontal: {
			"&:not(:first-child)": {
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 0
			},
			"&:not(:last-child)": {
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0
			}
		},
		/* Styles applied to the children if `orientation="vertical"`. */
		groupedVertical: {
			"&:not(:first-child)": {
				borderTopRightRadius: 0,
				borderTopLeftRadius: 0
			},
			"&:not(:last-child)": {
				borderBottomRightRadius: 0,
				borderBottomLeftRadius: 0
			}
		},
		/* Styles applied to the children if `variant="text"`. */
		groupedText: {},
		/* Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
		groupedTextHorizontal: {
			"&:not(:last-child)": {
				borderRight: `1px solid ${
					theme.palette.type === "light"
						? "rgba(0, 0, 0, 0.23)"
						: "rgba(255, 255, 255, 0.23)"
				}`
			}
		},
		/* Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
		groupedTextVertical: {
			"&:not(:last-child)": {
				borderBottom: `1px solid ${
					theme.palette.type === "light"
						? "rgba(0, 0, 0, 0.23)"
						: "rgba(255, 255, 255, 0.23)"
				}`
			}
		},
		/* Styles applied to the children if `variant="text"` and `color="primary"`. */
		groupedTextPrimary: {
			"&:not(:last-child)": {
				borderColor: fade(theme.palette.primary.main, 0.5)
			}
		},
		/* Styles applied to the children if `variant="text"` and `color="secondary"`. */
		groupedTextSecondary: {
			"&:not(:last-child)": {
				borderColor: fade(theme.palette.secondary.main, 0.5)
			}
		},
		/* Styles applied to the children if `variant="outlined"`. */
		groupedOutlined: {},
		/* Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
		groupedOutlinedHorizontal: {
			"&:not(:first-child)": {
				marginLeft: -1
			},
			"&:not(:last-child)": {
				borderRightColor: "transparent"
			}
		},
		/* Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
		groupedOutlinedVertical: {
			"&:not(:first-child)": {
				marginTop: -1
			},
			"&:not(:last-child)": {
				borderBottomColor: "transparent"
			}
		},
		/* Styles applied to the children if `variant="outlined"` and `color="primary"`. */
		groupedOutlinedPrimary: {
			"&:hover": {
				borderColor: theme.palette.primary.main
			}
		},
		/* Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
		groupedOutlinedSecondary: {
			"&:hover": {
				borderColor: theme.palette.secondary.main
			}
		},
		/* Styles applied to the children if `variant="contained"`. */
		groupedContained: {
			boxShadow: "none"
		},
		/* Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
		groupedContainedHorizontal: {
			"&:not(:last-child)": {
				borderRight: `1px solid ${theme.palette.grey[400]}`,
				"&$disabled": {
					borderRight: `1px solid ${theme.palette.action.disabled}`
				}
			}
		},
		/* Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
		groupedContainedVertical: {
			"&:not(:last-child)": {
				borderBottom: `1px solid ${theme.palette.grey[400]}`,
				"&$disabled": {
					borderBottom: `1px solid ${theme.palette.action.disabled}`
				}
			}
		},
		/* Styles applied to the children if `variant="contained"` and `color="primary"`. */
		groupedContainedPrimary: {
			"&:not(:last-child)": {
				borderColor: theme.palette.primary.dark
			}
		},
		/* Styles applied to the children if `variant="contained"` and `color="secondary"`. */
		groupedContainedSecondary: {
			"&:not(:last-child)": {
				borderColor: theme.palette.secondary.dark
			}
		}
	});

const ButtonGroup = React.forwardRef(function ButtonGroup(
	props: ButtonGroupProps,
	ref
) {
	const {
		children,
		classes,
		className,
		color = "default",
		component: Component = "div",
		disabled = false,
		disableElevation = false,
		disableFocusRipple = false,
		disableRipple = false,
		fullWidth = false,
		orientation = "horizontal",
		size = "medium",
		variant = "outlined",
		...other
	} = props;

	const buttonClassName = classNames(
		classes.grouped,
		classes[`grouped${capitalize(orientation)}`],
		classes[`grouped${capitalize(variant)}`],
		classes[`grouped${capitalize(variant)}${capitalize(orientation)}`],
		classes[
			`grouped${capitalize(variant)}${
				color !== "default" ? capitalize(color) : ""
			}`
		],
		{
			[classes.disabled]: disabled
		}
	);

	return (
		<Component
			role="group"
			className={classNames(
				classes.root,
				{
					[classes.contained]: variant === "contained",
					[classes.vertical]: orientation === "vertical",
					[classes.fullWidth]: fullWidth,
					[classes.disableElevation]: disableElevation
				},
				className
			)}
			ref={ref}
			{...other}
		>
			{React.Children.map(children, (child) => {
				if (!React.isValidElement(child)) {
					return null;
				}

				return React.cloneElement(child, {
					className: classNames(
						buttonClassName,
						child.props.className
					),
					color: child.props.color || color,
					disabled: child.props.disabled || disabled,
					disableElevation:
						child.props.disableElevation || disableElevation,
					disableFocusRipple,
					disableRipple,
					fullWidth,
					size: child.props.size || size,
					variant: child.props.variant || variant
				});
			})}
		</Component>
	);
});

export default withStyles(styles)(ButtonGroup);
