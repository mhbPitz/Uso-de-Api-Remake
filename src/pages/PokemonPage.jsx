import {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import SearchPokemon from '../components/SearchPokemon.jsx'

export default function PokemonPage() {
useEffect(() => {

}, [])

return (
    <>
    <SearchPokemon />
<Link to='/'>
Página Principal
</Link>
    </>
)
}