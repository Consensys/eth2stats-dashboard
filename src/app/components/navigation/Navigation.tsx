import React from "react";
import { observer } from "mobx-react";
import { Logo } from "./Logo";
import { SlotStats } from "./SlotStats";
import { BottomNav } from "./BottomNav";
import { NodesCount } from "./NodesCount";
import { Menu } from "app/components/navigation/Menu";
import { useStores } from "app/store/Hook";

export const Navigation: React.FC = observer(() => {
        const {store} = useStores();

        return (
            <React.Fragment>
                <nav
                    className="fixed w-full flex flex-col sm:justify-center bg-darkprimary-100 h-32 sm:h-24 z-30"
                    style={{top: Object.keys(store.getOtherDashes()).length > 1 && 48 || 0}}>
                    <div className="flex justify-between w-full py-4 sm:py-0">
                        <Logo network={store.networkName}/>

                        <div className="flex items-center">
                            <NodesCount store={store}/>
                            {window.innerWidth >= 640 && <SlotStats store={store}/>}
                            <Menu networkPath={store.getNetworkConfig()!.path}
                                  currentPath={store.path}/>
                        </div>
                    </div>

                    {
                        window.innerWidth < 640 &&
                        <div className="flex sm:hidden w-full p-4 justify-center">
                            <SlotStats store={store}/>
                        </div>
                    }
                </nav>

                <BottomNav joinURL={store.getNetworkConfig()!.joinURL}
                           issuesURL={store.getNetworkConfig()!.issuesURL}
                           forkURL={store.getNetworkConfig()!.forkURL}
                           forkName={store.getNetworkConfig()!.forkName}/>
            </React.Fragment>
        );
    }
);
