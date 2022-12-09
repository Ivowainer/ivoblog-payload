import React from "react";

const baseClass = "m-2 border-b-0 border-t-2 border-gray-500 w-1/2";

const ButtonElement = ({ attributes, children, element }) => {
    switch (element.type) {
        case "table":
            return (
                <table className="bg-red-500">
                    <tbody {...attributes}>{children}</tbody>
                </table>
            );
        case "table-row":
            return <tr {...attributes}>{children}</tr>;
        case "table-cell":
            return <td {...attributes}>{children}</td>;
        default:
            return <p {...attributes}>{children}</p>;
    }
};

export default ButtonElement;
