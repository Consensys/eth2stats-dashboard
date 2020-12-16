import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { onReactionError, when } from "mobx";
import { AppConfig } from "./AppConfig";
import { App as AppComponent } from "app/components/App";

export class App {
    async init(target: HTMLElement) {
        let appConfigData: any;
        let localDev = false;
        try {
            const resp = (await axios.get("/config.json"));
            if (resp.headers["X-Local-Dev"]) {
                localDev = true;
            }
            appConfigData = resp.data;
        } catch (e) {
            // No logging support yet
            // tslint:disable-next-line:no-console
            console.error(`Couldn't load application config!`, e);
            return;
        }
        let appConfig = new AppConfig();
        appConfig.fromJson(appConfigData, localDev);

        onReactionError((e) => {
            // TODO proper logging
            // logger.error(e);
        });

        when(() => true, () => {
            ReactDOM.render(
                React.createElement(AppComponent, { appConfig }),
                target
            );
        });
    }
}
