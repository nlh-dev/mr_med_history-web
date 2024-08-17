import { IPatients, patients, } from './Patients.data'
import './Patiens.css'
import '../pages.css'

export const Patients = () => {


    return (
        <div className='pages-index'>
            <div className='pages-index'>
                <div className='start-pages'>
                    <h2>PACIENTES</h2>
                    <div className='user-info'>
                        <div className="fullname">
                            <h2>Nombre y Apellido</h2>
                        </div>
                        <div className="user-type">
                            <h2>(Tipo de Usuario)</h2>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="add_patients">
                    <div className='search_field'>
                        <input type="text" placeholder='Buscar Paciente.......' />
                    </div>
                    <button>
                        <i className="fa-solid fa-circle-plus" /> AÑADIR PACIENTE
                    </button>
                </div>
                <table className='content-table'>
                    <thead>
                        <tr>
                            <th>NOMBRE Y APELLIDO</th>
                            <th>CÉDULA DE IDENTIDAD</th>
                            <th>NÚMERO DE TELEFONO</th>
                            <th>CÓDIGO DE HISTORIA</th>
                            <th>OPCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient: IPatients) => (
                            <tr>
                                <td>{patient.full_name}</td>
                                <td>{patient.id_number}</td>
                                <td>{patient.phone_number}</td>
                                <td>{patient.mhistory_id}</td>
                                <td>
                                    <div className="buttons">
                                        
                                        <div className='add_button'>
                                            <a>
                                                <i className={patient.add_button} />
                                            </a>
                                        </div>

                                        <div className='info_button'>
                                            <a>
                                                <i className={patient.info_button} />
                                            </a>
                                        </div>

                                        <div className='edit_button'>
                                            <a>
                                                <i className={patient.edit_button} />
                                            </a>
                                        </div>

                                        <div className='delete_button'>
                                            <a>
                                                <i className={patient.delete_button} />
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}