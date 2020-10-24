import React from "react";
import MUIRichTextEditor from "../../src";

const save = (data: string) => {
	console.log(data);
};

const Basic = () => {
	return <MUIRichTextEditor label="Type something here..." onSave={save} />;
};

export default Basic;
