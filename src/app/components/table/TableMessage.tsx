import React from "react";

export const TableMessage: React.FC = (props) => (
    <div className="py-4 w-full bg-primary-500">
        <div className="flex justify-center">
            <p className="font-semibold text-sm text-white">{props.children}</p>
        </div>
    </div>
);
