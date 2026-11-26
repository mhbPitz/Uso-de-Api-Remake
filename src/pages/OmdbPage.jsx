import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function OmdbPage() {
    const nav = useNavigate()
    const navMainPage = () => {nav('/')}
    useEffect(() => {

    }, [])

    return(
        <>
        <button onClick={navMainPage}></button>
        </>
    )
}