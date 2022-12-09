import React from "react";

const baseClass = "m-2 border-b-0 border-t-2 border-gray-500 w-1/2";

const ButtonElement: React.FC<{ attributes: any; element: any }> = ({ attributes, children, element }: any) => (
    <div contentEditable={false}>
        <span {...attributes} className={baseClass}>
            <hr className={baseClass} />
            {children}
        </span>
    </div>
);
export default ButtonElement;
