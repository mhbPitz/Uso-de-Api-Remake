import {useState, useEffect} from "react";

export default function usePokemon() {
    useEffect(() => {
        const [pokemon, setPokemon] = useState('')

        const apiPokemon = async () => {
            const pokemon = await axios.get(``)
        }
    }, [])

    return {pokemon}
}
