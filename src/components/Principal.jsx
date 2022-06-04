import React from 'react'
import Formulario from './Formulario'
import PersonajeItem from './PersonajeItem'
import ModalPersonaje from './modals/ModalPersonaje'
import axios from 'axios'
import Swal from 'sweetalert2'
import ItemsPages from './ItemsPages'
import {firebase} from '../firebase'

const Principal = () => {
    const [listaPersonajes, setListaPersonajes] = React.useState([])
    const [countPages, setCountPages] = React.useState(1)
    const [page, setPage] = React.useState(1)
    const [showModalPersonaje, setModalPersonaje] = React.useState(false);
    const [personajeSelect, setPersonajeSelect] = React.useState({})
    const [filter, setFilter] = React.useState('/?name=&species=&status=&gender=&page=1')

    React.useEffect(() => {
        const buscar = () => {
            axios.get(`https://rickandmortyapi.com/api/character${filter}`).then((res) => {
                if (res.status === 200) {
                    const listPersonajesRestult = res.data.results.map(({ image, id, gender, name, species, status }) => ({
                        image,
                        id,
                        gender,
                        name,
                        species,
                        status
                    }))
                    setCountPages(res.data.info.pages)
                    setListaPersonajes(listPersonajesRestult);
                }
            }).catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message
                })
                console.error(err)
            })
        }
        if (filter!=='/?name=&species=&status=&gender=&page=1'){
            buscar()
        }
    }, [filter]);

    React.useEffect(() => {
        const obtenerDatos= async () =>{
            try{
                const db = firebase.firestore()
                const data = await db.collection('HistorialBusqueda').get()
                const arrayData= data.docs.map(item => (
                    {
                        id:item.id, ...item.data()
                    }
                ))
                console.log(arrayData)

                //setListaFrutas(arrayData)

            }catch(error){
                console.log(error)
            }
        }
        obtenerDatos();
    }, []);

    const newPage = (newPage) => {
        const index = page >= 10 ? 2 : 1
        const fill = filter.substring(0, filter.length - index) + newPage
        setPage(newPage)
        setFilter(fill)
    }

    const hendelSelect = (item) => {
        if (!showModalPersonaje) {
            setPersonajeSelect(item)
            setModalPersonaje(!showModalPersonaje)
        }
        setModalPersonaje(!showModalPersonaje)
    }

    return (
        <div className=" container ">
            <ModalPersonaje
                showModal={showModalPersonaje}
                hendelModal={hendelSelect}
                personajeSelect={personajeSelect} />
            <h1 className="title text-center fw-bolder my-3 animate__animated animate__fadeIn">Busqueda de Personajes</h1>
            <Formulario
                setFilter={setFilter}
                setPage={setPage}
            />
            <div className="bg-gradient col-12 ">
                <ItemsPages
                    countPages={countPages}
                    page={page}
                    newPage={newPage}
                />
                <div className="card-body table-responsive">
                    <table className="table table-striped  rounded">
                        <thead>
                            <tr className=" text-center">
                                <th className="col-1 ">#</th>
                                <th className="col-1">Nombre</th>
                                <th className="col-1">Estado</th>
                                <th className="col-1">Especie</th>
                                <th className="col-1">Genero</th>
                                <th className="col-1">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaPersonajes.map((item, index) => (
                                    <PersonajeItem key={item.id}
                                        className={index % 2 === 0 ? 'table-active' : ''}
                                        item={item}
                                        hendelSelect={hendelSelect} />))
                            }
                        </tbody>
                    </table>
                    <ItemsPages
                        countPages={countPages}
                        page={page}
                        newPage={newPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Principal