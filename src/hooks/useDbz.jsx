import {useState, useEffect} from "react";

export default function useDbz() {
    useEffect(() => {
        const [dbz, setDbz] = useState('')

        const apiDbz = async () => {
            const personagem = await axios.get(`https://dragonball-api.com/api/characters/1`)
        }
    }, [])

    return {personagem}
}
