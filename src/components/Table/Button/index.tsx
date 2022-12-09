import React, { useCallback } from "react";
import { useSlate } from "slate-react";
import { Editor, Range, Point, Element as SlateElement } from "slate";

import { ElementButton } from "payload/components/rich-text";

const withTables = (editor) => {
    const { deleteBackward, deleteForward, insertBreak } = editor;

    editor.deleteBackward = (unit) => {
        const { selection } = editor;

        if (selection && Range.isCollapsed(selection)) {
            const [cell] = Editor.nodes(editor, {
                match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "table-cell",
            });

            if (cell) {
                const [, cellPath] = cell;
                const start = Editor.start(editor, cellPath);

                if (Point.equals(selection.anchor, start)) {
                    return;
                }
            }
        }

        deleteBackward(unit);
    };

    editor.deleteForward = (unit) => {
        const { selection } = editor;

        if (selection && Range.isCollapsed(selection)) {
            const [cell] = Editor.nodes(editor, {
                match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "table-cell",
            });

            if (cell) {
                const [, cellPath] = cell;
                const end = Editor.end(editor, cellPath);

                if (Point.equals(selection.anchor, end)) {
                    return;
                }
            }
        }

        deleteForward(unit);
    };

    editor.insertBreak = () => {
        const { selection } = editor;

        if (selection) {
            const [table] = Editor.nodes(editor, {
                match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "table",
            });

            if (table) {
                return;
            }
        }

        insertBreak();
    };

    return editor;
};

const ToolbarButton: React.FC<{ path: string }> = () => {
    const editor = useSlate();

    const handleAddHR = useCallback(() => {
        withTables(editor);
    }, [editor]);

    return (
        <ElementButton className="m-2 border-b-0 border-t-2 border-gray-500 w-1/2" format="hr" onClick={handleAddHR}>
            table
        </ElementButton>
    );
};

export default ToolbarButton;
