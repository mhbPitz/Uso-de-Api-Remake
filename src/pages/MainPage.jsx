import {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom'

export default function MainPage() {
    const nav = useNavigate()
    useEffect(() => {

    }, [])

    return (
        <>
        <button onClick={() => {nav('/omdb')}}>Omdb</button>
        <Link to="/pokemon">
            Pokemon
        </Link>
        <button onClick={() => {nav('/dbz')}}>Dbz</button>
        </>
    )
}