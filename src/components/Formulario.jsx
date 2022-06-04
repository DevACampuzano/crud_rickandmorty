import React from 'react'
import { Button } from 'react-bootstrap'
import '../assets/style/formulario.css'

const Formulario = ({ setFilter, setPage }) => {
    const [name, setName] = React.useState('')
    const [species, setSpecies] = React.useState('')
    const [status, setStatus] = React.useState('')
    const [gender, setGender] = React.useState('')

    const HendelSubmit = async (e) => {
        e.preventDefault()
        document.querySelector('#btnBuscar').disabled = true;
        await setPage(1)
        await setFilter(`/?${'name=' + name}&${'species=' + species}&${'status=' + status}&${'gender=' + gender}&page=1`)
        document.querySelector('#btnBuscar').disabled = false;
    }
    
    return (
        <form className="row g mt-3 mb-3 from-div rounded rounded animate__animated animate__fadeIn" onSubmit={HendelSubmit}>
            <div className="row align-self-center">
                <div className="col-md-3 mt-2 form-floating">
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Nombre del personaje" />
                    <label htmlFor="name" className="forn-label">Nombre:</label>
                </div>
                <div className="col-md-2 mt-2 form-floating">
                    <select className="form-control form-select" id="status" value={status} onChange={(e) => { setStatus(e.target.value) }} placeholder="Estado" >
                        <option defaultValue></option>
                        <option value="Alive">Vivo</option>
                        <option value="Dead">Muerto </option>
                        <option value="unknown">Desconocido</option>
                    </select>
                    <label htmlFor="status" className="forn-label ">Estado:</label>
                </div>
                <div className="col-md-3 mt-2 form-floating">
                    <select type="text" className="form-control form-select" id="species" value={species} onChange={(e) => { setSpecies(e.target.value) }} placeholder="Especie" >
                        <option defaultValue></option>
                        <option value="Human">Humano</option>
                        <option value="Humanoid">Humanoide</option>
                        <option value="Animal">Animal</option>
                        <option value="Robot">Robot</option>
                        <option value="Disease">Enfermedad</option>
                        <option value="Alien">Alien </option>
                        <option value="Mythological Creature">Criatura Geometrica</option>
                        <option value="unknown">Desconocido</option>
                    </select>
                    <label htmlFor="species" className="forn-label ">Especie:</label>
                </div>
                <div className="col-md-2 mt-2 form-floating">
                    <select className="form-control form-select" aria-label="Default select example" id="gender" value={gender} onChange={(e) => { setGender(e.target.value) }} placeholder="Genero" >
                        <option defaultValue></option>
                        <option value="Female">Mujer </option>
                        <option value="Male">Hombre</option>
                        <option value="Genderless">Sin género</option>
                        <option value="unknown">Desconocido</option>

                    </select>
                    <label htmlFor="gender" className="forn-label ">Genero:</label>
                </div>
                <div className="d-flex justify-content-end bd-highlight col mt-4">
                    <Button className="mb-3 px-5" id="btnBuscar" type="submit">Buscar</Button>
                </div>
            </div>
        </form>
    )
}

export default Formulario