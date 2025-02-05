import axios from 'axios'

class ApiHandler {
    constructor() {
        if (ApiHandler.instance) {
            return ApiHandler.instance
        }

        this.axiosInstance = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/'
        })

        ApiHandler.instance = this
    }

    /**
     * fetch all Pokémon
     * @returns {Promise<*[]>}
     */
    // Récupérer tous les pokémons
    static async fetchAllPokemon() {
        const apiHandlerInstance = new ApiHandler()
        let allPokemon = []
        let url = 'pokemon?limit=1000'

        while (url) {
            const res = await apiHandlerInstance.axiosInstance.get(url)
            if (res.status === 200) {
                allPokemon = allPokemon.concat(res.data.results)
                url = res.data.next
            } else {
                break
            }
        }

        return allPokemon
    }

    /**
     * Fetch Pokémon list with index an amount fetched
     * @param offset index of the first Pokémon to fetch
     * @param limit maximum number of Pokémon to fetch
     * @returns {Promise<*[]|null>}
     */
    static async fetchPokemonList(offset = 0, limit = 20) {
        const apiHandlerInstance = new ApiHandler()
        const res = await apiHandlerInstance.axiosInstance.get(
            `pokemon?offset=${offset}&limit=${limit}`
        )
        if (res.status === 200) {
            return res.data.results
        }
        return null
    }

    /**
     * Fetch a specific Pokémon
     * @param pokemon can be either the id or the name of the Pokémon we want to fetch
     * @returns {Promise<any|null>}
     */
    static async fetchPokemon(pokemon) {
        const apiHandlerInstance = new ApiHandler()
        const res = await apiHandlerInstance.axiosInstance.get(`pokemon/${pokemon}`)
        if (res.status === 200) {
            return res.data
        }
        return null
    }

    // Rechercher un pokémon par son nom
    static async searchPokemonByNamePrefix(prefix) {
        const pokemonList = await ApiHandler.fetchAllPokemon()
        if (!pokemonList) return null

        return pokemonList.filter((pokemon) => pokemon.name.includes(prefix.toLowerCase()))
    }

    // Récupérer l'image d'un pokémon
    static async fetchPokemonPicture(id) {
        const apiHandlerInstance = new ApiHandler()
        const res = await apiHandlerInstance.axiosInstance.get(`pokemon/${id}`)
        if (res.status === 200) {
            return res.data.sprites.other['official-artwork'].front_default
        }
        return null
    }

    // Récupérer l'image d'un pokémon pour la carte pokémon
    static async fetchPokemonPictureCard(id) {
        const apiHandlerInstance = new ApiHandler()
        const res = await apiHandlerInstance.axiosInstance.get(`pokemon/${id}`)
        if (res.status === 200) {
            return res.data.sprites.front_default
        }
        return null
    }

    // Récupérer les informations de tous les pokémons avec leurs images
    static async fetchAllPokemonWithPictures() {
        const allPokemon = await ApiHandler.fetchAllPokemon()
        if (!allPokemon) return null

        return await Promise.all(
            allPokemon.map(async (pokemon) => {
                const picture = await ApiHandler.fetchPokemonPictureCard(pokemon.name)
                return { ...pokemon, picture }
            })
        )
    }
}

export default ApiHandler
