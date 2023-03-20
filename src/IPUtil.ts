import { fetchJsonResultWithFakeUserAgent as fetchJson } from './Utils';

export type IpifyJson = {
    ip: string;
};

export const getGlobalIp = async (): Promise<IpifyJson> =>
    await fetchJson<IpifyJson>('https://api.ipify.org/?format=json');
