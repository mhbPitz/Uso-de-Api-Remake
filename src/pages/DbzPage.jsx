import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import SearchDbz from '../components/SearchDbz.jsx'

export default function DbzPage() {
    const nav = useNavigate()
    useEffect(() => {

    }, [])

    return (
        <>
        <SearchDbz />
        </>
    )
}