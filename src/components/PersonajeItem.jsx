import { Button } from 'react-bootstrap'
import React from 'react'

const PersonajeItem = ({ item,hendelSelect }) => {
    let status
    if (item.status === 'Alive') {
        status = 'Vivo'
    } else if (item.status === 'Dead') {
        status = 'Muerto'
    } else if (item.status === 'unknown') {
        status = 'Desconocido'
    } else {
        status = item.status
    }

    let species
    if (item.species === 'Human') {
        species = 'Humano'
    } else if (item.species === 'Humanoid') {
        species = 'Humanoide'
    } else if (item.species === 'unknown') {
        species = 'Desconocido'
    } else if (item.species === 'Disease') {
        species = 'Enfermedad'
    } else if (item.species === 'Mythological Creature') {
        species = 'Criatura Geometrica'
    } else {
        species = item.species
    }

    let gender
    if (item.gender === 'Female') {
        gender = 'Mujer'
    } else if (item.gender === 'Male') {
        gender = 'Hombre'
    } else if (item.gender === 'unknown') {
        gender = 'Desconocido'
    } else if (item.gender === 'Genderless') {
        gender = 'Sin género'
    } else {
        gender = item.gender
    }

    return (
        <>
            <tr className="text-center animate__animated animate__fadeInDown" >
                <th className="col-1 "> <img src={item.image} alt={item.id} height="200" width="200" className="rounded mx-auto d-block" /></th>
                <th className="col-1 align-middle">{item.name}</th>
                <th className="col-1 align-middle">{status}</th>
                <th className="col-1 align-middle">{species}</th>
                <th className="col-1 align-middle">{gender}</th>
                <th className="col-1 align-middle"> <Button onClick={()=>{hendelSelect(item)}}> Selecionar</Button></th>
            </tr>
        </>
    )
}

export default PersonajeItem