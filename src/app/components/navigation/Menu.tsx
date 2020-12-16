import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IMenuProps {
}

export const Menu: React.FC<IMenuProps> = (props) => {
    let {pathname} = useLocation();

    return (
        <ul className="flex items-center">
            <li className="mr-2 sm:mr-6 h-6 border-r border-grey-600 hidden sm:block"
                role="separator"/>
            <li className="mr-4 flex items-center">
                <Link to={`/`}>
                    <div className={`mr-4 flex items-center justify-center border p-2 w-10
                                    ${pathname === `/`
                        ? "border-primary-500 bg-primary-500 text-white"
                        : "text-grey-600 border-grey-600 hover:border-white hover:text-white transition"}`}>
                        <FontAwesomeIcon icon="list"/>
                    </div>
                </Link>
                <Link to={`/map`}>
                    <div className={`flex items-center justify-center border p-2 w-10
                                    ${pathname === `/map`
                        ? "border-primary-500 bg-primary-500 text-white"
                        : "text-grey-600 border-grey-600 hover:border-white hover:text-white transition"} `}>
                        <FontAwesomeIcon icon="map"/>
                    </div>
                </Link>
            </li>
        </ul>
    );
};
