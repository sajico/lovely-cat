import fetch, { Response } from 'node-fetch';

export const fetchJsonResultWithFakeUserAgent = async <T>(url: string): Promise<T> => {
    const response: Response = await fetch(url, {
        headers: {
            'user-agent': 'Mozilla/5.0 ' +
                '(Macintosh; Intel Mac OS X 10_15_7) ' +
                'AppleWebKit/537.36 (KHTML, like Gecko) ' +
                'Chrome/111.0.0.0 Safari/537.36'
        }
    });
    const json: T = await response.json() as T;
    return json;
}