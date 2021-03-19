import axios from 'axios';

export const apiService = {
    get(resources: string, params = {}) {
        return axios.get(resources, params);
    },

    post(resources: string, body: object) {
        return axios.post(resources, body);
    },
};

export { PokemonService } from './Pokemones';

export default apiService;