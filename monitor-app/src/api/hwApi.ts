class HwApi {
  url: string = 'http://192.168.0.66:8085/data.json';

  fetchMetrics = (): Promise<Response> => {
    let header = new Headers();
    header.append('Accept', 'application/json, text/javascript, */*; q=0.01');
    header.append('Accept-Encoding', 'gzip, deflate');
    header.append('Cache-Control', 'no-cache');

    const options: RequestInit = {
      method: 'GET',
      headers: header,
      mode: 'no-cors'
    };

    return fetch(new URL(this.url));
  };
}

export default HwApi;