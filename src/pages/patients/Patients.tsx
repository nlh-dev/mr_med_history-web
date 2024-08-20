import { TableComponent } from '../../components/tables/TableComponent'
import '../pages.css'
import './Patiens.css'

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
                        <i className="add-icon fa-solid fa-circle-plus" /> AÑADIR PACIENTE
                    </button>
                </div>
                <TableComponent />
            </div>
        </div>
    )
}