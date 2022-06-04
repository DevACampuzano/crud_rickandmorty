import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { firebase } from '../../firebase'
import Swal from 'sweetalert2'

const ModalPersonaje = ({ hendelModal, showModal, personajeSelect }) => {
    const [opinion, setOption] = React.useState('')
    const cancelar = () => {
        setOption('')
        hendelModal()
    }

    const resgisterPersonaje = async () => {
        const btnRegistrar = document.getElementById('btnRegistrar');
        const btnCancelar = document.getElementById('btnCancelar');
        btnRegistrar.disabled = true;
        btnCancelar.disabled = true;

        const { id, image, name, status, species, gender } = personajeSelect

        if (!opinion) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe Ingresar una opinion valida.'
            })
            btnRegistrar.disabled = false;
            btnCancelar.disabled = false;
            return;
        }

        const db = firebase.firestore()
        const data = await db.collection('OpinionesPersonajes').where('idcharacter','==',id).get()
        
        if (data.docs.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se encontro una opinion registrada de este personaje.'
            })
            btnRegistrar.disabled = false;
            btnCancelar.disabled = false;
            return
        }
        
        
        const newOption = {
            idcharacter: id,
            image,
            name,
            status,
            species,
            gender,
            opinion
        }

        await db.collection('OpinionesPersonajes').add(newOption);
        btnRegistrar.disabled = false;
        btnCancelar.disabled = false;
        cancelar()
        Swal.fire({
            icon: 'success',
            title: 'Registrado',
            text: 'La opinion se registro Exitosamente.'
        })
    }

    return (
        <Modal show={showModal} onHide={cancelar}>
            <Modal.Header closeButton>
                <h5 className="title">Registro de Opinión</h5>
            </Modal.Header>
            <Modal.Body>
                <div className="form-floating col-auto py-3 text-center">
                    <img src={personajeSelect.image} alt={personajeSelect.id} width="150" height="150" border="0" />

                </div>
                <br />
                <div className="form-floating">
                    <input id="name"
                        className='form-control mb-2'
                        type="text"
                        value={personajeSelect.name}
                        disabled
                    />
                    <label htmlFor="name" className='col-12'>Nombre:</label>
                </div>
                <div className="form-floating">
                    <input id="status"
                        className='form-control mb-2'
                        type="text"
                        value={personajeSelect.status}
                        disabled
                    />
                    <label htmlFor="status" className='col-12'>Estado:</label>
                </div>
                <div className="form-floating">
                    <input id="species"
                        className='form-control mb-2'
                        type="text"
                        value={personajeSelect.species}
                        disabled
                    />
                    <label htmlFor="species" className='col-12'>Especie:</label>
                </div>
                <div className="form-floating">
                    <input id="gender"
                        className='form-control mb-2'
                        type="text"
                        value={personajeSelect.gender}
                        disabled
                    />
                    <label htmlFor="gender" className='col-12'>Genero:</label>
                </div>
                <div className="form-floating">
                    <textarea
                        className="form-control py-5"
                        id="opinion"
                        value={opinion}
                        onChange={(e) => { setOption(e.target.value) }}
                    />
                    <label htmlFor="opinion" className='col-12'>Opinión:</label>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={resgisterPersonaje} id="btnRegistrar">Registrar</Button>
                <Button onClick={cancelar} className="btn-danger" id="btnCancelar">Cancelar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPersonaje