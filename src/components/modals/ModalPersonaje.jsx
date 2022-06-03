import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalPersonaje = ({ hendelModal, showModal, personajeSelect }) => {
    const [opinion,setOption]=React.useState('')
    const cancelar = () => {
        setOption('')
        hendelModal()
    }
    
    const resgisterPersonaje=()=>{}

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
                    onChange={(e)=>{setOption(e.target.value)}}
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