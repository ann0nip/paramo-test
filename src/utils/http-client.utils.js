import axios from 'axios';

export class HttpClient {
    async get(url) {
        const { data, status } = await axios.get(url);
        return { data, status };
    }
}
