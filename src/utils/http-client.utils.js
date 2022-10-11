import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const axios = setupCache(Axios);
export class HttpClient {
    async get(url) {
        const { data, status } = await axios.get(url);
        return { data, status };
    }
}
