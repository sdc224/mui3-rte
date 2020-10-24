import React, { FunctionComponent, useRef } from "react";
import MUIRichTextEditor from "../../src";
import { TMUIRichTextEditorRef } from "../../src/MUIRichTextEditor";

const RefSave: FunctionComponent = () => {
	const ref = useRef<TMUIRichTextEditorRef>(null);
	let focusEl: any = null;

	const handleClick = () => {
		ref.current?.save();
	};

	const handleFocus = () => {
		focusEl();
		// ref.current?.focus();
	};

	const handleSave = (data: string) => {
		console.log(data);
	};

	return (
		<div>
			Save editor state from external button:
			<button
				style={{
					marginLeft: 5,
					padding: 5
				}}
				onClick={handleClick}
			>
				Save
			</button>
			<button
				style={{
					marginLeft: 5,
					padding: 5
				}}
				onClick={handleFocus}
			>
				Focus
			</button>
			<MUIRichTextEditor
				onSave={handleSave}
				ref={ref}
				focuser={(method) => {
					focusEl = method;
				}}
				controls={["bold", "italic", "underline", "quote", "clear"]}
			/>
		</div>
	);
};

export default RefSave;
