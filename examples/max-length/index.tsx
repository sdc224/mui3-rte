import React from "react";
import MUIRichTextEditor from "../../src";

const save = (data: string) => {
	console.log(data);
};

const MaxLength = () => {
	return (
		<MUIRichTextEditor
			label="You can only type 10 characters..."
			maxLength={10}
			onSave={save}
		/>
	);
};

export default MaxLength;
