import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'
import SearchOmdb from '../components/SearchOmdb.jsx'

export default function OmdbPage() {
    const nav = useNavigate()
    const navMainPage = () => {nav('/')}
    useEffect(() => {

    }, [])

    return(
        <>
        <SearchOmdb />
        <button onClick={navMainPage}></button>
        </>
    )
}