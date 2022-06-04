import React from 'react'

const ListaOpiniones = () => {
    return (
        <div className="container">
            <h1 className="title text-center fw-bolder my-3 animate__animated animate__fadeIn">Lista de Opiniones</h1>
            <div className="card-body table-responsive">
                <table className="table table-striped  rounded">
                    <thead>
                        <tr className=" text-center">
                            <th className="col-1 ">#</th>
                            <th className="col-1">Nombre</th>
                            <th className="col-1">Estado</th>
                            <th className="col-1">Especie</th>
                            <th className="col-1">Genero</th>
                            <th className="col-1">Opiniones</th>
                            <th className="col-1">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListaOpiniones