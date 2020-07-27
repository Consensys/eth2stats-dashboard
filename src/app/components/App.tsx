import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../store/Hook";
import { Loading } from "./Loading";
import { Home } from "../pages/Home";
import { Map } from "../pages/Map";
import { AddNode } from "../pages/AddNode";
import { NotFound } from "../pages/NotFound";
import { Notifications } from "./Notifications";
import { Navigation } from "./navigation/Navigation";
import { AppConfig } from "app/AppConfig";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Tabs } from "app/components/navigation/Tabs";

interface IAppProps {
    appConfig: AppConfig;
}

export const App = observer((props: IAppProps) => {
    const {store} = useStores();
    store.setConfig(props.appConfig);

    let network = store.getNetworkConfig();

    return (
        <div className="text-grey-600">
            <Router>
                <Loading store={store}/>
                <Notifications notifStore={store.notify}/>
                <Tabs/>

                <Switch>
                    <Route path="/add-node" exact >
                        <AddNode/>
                    </Route>
                    <Route path="/" exact>
                        <Navigation/>
                        <Switch>
                            <Route path={`${network.path}`} exact>
                                <Home store={store}/>
                            </Route>
                            <Route path={`${network.path}/map`} exact>
                                <Map store={store}/>
                            </Route>
                            <Route>
                                <NotFound/>
                            </Route>
                        </Switch>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
});
