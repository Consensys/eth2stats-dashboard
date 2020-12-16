export interface IConnConfig {
    "HTTP_API": string;
    "WS_API": string;
}

export interface INetworkConfig {
    "name": string;
    "joinURL": string;
    "issuesURL": string;
    "forkURL": string;
    "forkName": string;
    "serverAddr": string;
}

export type OtherDashes = Record<string, string>;

export interface IAppConfigData {
    local: IConnConfig;
    remote: IConnConfig;
    network: INetworkConfig;
    others: OtherDashes;
    hashRouter: boolean;
}

export class AppConfig {
    private data: IAppConfigData;
    private local: boolean;

    fromJson(data: IAppConfigData, local: boolean) {
        this.data = data;
        this.local = local;
    }

    getConfig(): IAppConfigData {
        return this.data;
    }

    isLocal(): boolean {
        return this.local;
    }
}
