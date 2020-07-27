import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface IBottomNavProps {
    joinURL: string;
    issuesURL: string;
    forkURL: string;
    forkName: string;
}

export const BottomNav: React.FC<IBottomNavProps> = (props) => (
    <div>
        <nav
            className="fixed bottom-0 w-full hidden sm:flex items-center justify-between bg-darkprimary-100 h-16 z-30">
            <div className="px-4 flex items-center">
                <Link to="add-node"
                    className="flex items-center text-white hover:text-primary-500 transition mr-8">
                    <FontAwesomeIcon icon="plus-circle" className="mr-2" />
                    <span className="font-semibold text-sm">Add your node</span>
                </Link>
                <a href={props.joinURL}
                    className="flex items-center text-white hover:text-primary-500 transition mr-8"
                    target="_blank">
                    <FontAwesomeIcon icon="code-branch" className="mr-2" />
                    <span className="font-semibold text-sm">Join testnet</span>
                </a>
            </div>
            <div
                className="px-4 flex items-center font-semibold text-sm text-grey-600">
                <a href={props.issuesURL}
                    className="mr-8 flex items-center text-grey-600 hover:text-primary-500 transition"
                    target="_blank">
                    <FontAwesomeIcon icon="exclamation-circle" className="mr-2" />
                    <span className="font-semibold text-sm">Report issues</span>
                </a>
                <div className="mr-8 flex items-center">
                    <a href={props.forkURL}
                        className="text-grey-600 hover:text-primary-500 transition"
                        target="_blank">
                        <span className="mr-2">Fork on GitHub </span></a>
                </div>
                { props.forkName === "Aleth.io"
                    ? <div className="flex items-center">
                        <span className="mr-2">Powered by </span>
                        <a href="https://aleth.io"
                           className="text-grey-600 hover:text-primary-500 transition"
                           target="_blank">Aleth.io</a>
                    </div>
                    : <div className="flex items-center">
                        <span className="mr-2">Fork of</span>
                        <a href="https://github.com/ConsenSys/eth2stats-dashboard"
                           className="text-grey-600 hover:text-primary-500 transition"
                           target="_blank">Aleth.io Eth2stats</a>
                        <span className="mr-2">(MIT license)</span>
                    </div>
                }
            </div>
        </nav>
    </div>
);
