import { Editor } from "slate";

const withHR = (incomingEditor: Editor): Editor => {
    const editor = incomingEditor;
    const { isVoid } = editor;

    editor.isVoid = (element: any) => (element.type === "table" ? true : isVoid(element));

    return editor;
};

export default withHR;
