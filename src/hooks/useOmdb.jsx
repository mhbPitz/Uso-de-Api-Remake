import {useState, useEffect} from "react";

export default function useOmdb() {
    useEffect(() => {
        const [omdb, setOmdb] = useState('')

        const apiOmdb = async () => {
            const filme = await axios.get(``)
        }
    }, [])

    return {filme}
}
