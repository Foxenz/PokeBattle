import axios from 'axios';

class ApiHandler {
    constructor() {
        if (ApiHandler.instance) {
            return ApiHandler.instance;
        }

        this.axiosInstance = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/',
        });

        ApiHandler.instance = this;
    }

    static async fetchPokemonList() {
        const apiHandlerInstance = new ApiHandler();
        const res = await apiHandlerInstance.axiosInstance.get('pokemon/');
        const response = apiHandlerInstance.checkResponse(res);
    
        if (!response) return null;
    
        return response.data;
    }

    static async fetchPokemon(pokemon) {
        const apiHandlerInstance = new ApiHandler();
        const res = await apiHandlerInstance.axiosInstance.get(`pokemon/${pokemon}`);
        const response = apiHandlerInstance.checkResponse(res);
    
        if (!response) return null;
    
        return response.data;
    }

    checkResponse(res) {
        if (res.status === 200) {
            return res;
        }
        return null;
    }
}

export default ApiHandler;