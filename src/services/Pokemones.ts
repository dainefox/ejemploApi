import ApiService from './index';

const POKEMONES_API = 'https://andresriascos.pw/api/v1/pokemones';

export const GithubService = {
    async getPokemones() {
        const { data } = await ApiService.get(`${POKEMONES_API}`);
        return data;
    },

    async postPokemones(body: object) {
        const { data } = await ApiService.post(`${POKEMONES_API}`, body);
        return data;
    },
};