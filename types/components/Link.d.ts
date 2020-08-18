import React, { FunctionComponent } from "react";
import { ContentState } from "draft-js";
declare type TLinkProps = {
    children?: React.ReactNode;
    contentState: ContentState;
    entityKey: string;
};
declare const Link: FunctionComponent<TLinkProps>;
export default Link;
