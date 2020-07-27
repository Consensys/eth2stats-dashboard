export interface IConnConfig {
    "HTTP_API": string;
    "WS_API": string;
    "SERVER_ADDR": string;
}

export interface INetworkConfig {
    "name": string;
    "path": string;
    "joinURL": string;
    "issuesURL": string;
    "forkURL": string;
    "forkName": string;
}

export type OtherDashes = Record<string, string>;

export interface IAppConfigData {
    local: IConnConfig,
    remote: IConnConfig,
    network: INetworkConfig,
    others: OtherDashes,
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
