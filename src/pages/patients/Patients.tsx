import { useEffect, useState } from 'react'
import { TableComponent } from '../../components/tables/TableComponent'
import '../pages.css'
import './Patiens.css'
import { dataPatients, IPatients, patientsColumns } from './Patients.data'
import { PaginationButtons } from '../../components/UI/PaginationButtons'
import { useNavigate } from 'react-router-dom'

export const Patients = () => {

    const [columns, setColumns] = useState(patientsColumns);

    const navigate = useNavigate();
    
    // const user: string = 'admin'

    // useEffect(()=> {
    //     if(user === 'ADMIN'){
    //         const columnsFilter = patientsColumns.filter(col => col.header !== 'OPCIONES');
    //         setColumns(columnsFilter);
    //     }
    // },[]);

    // const getDataTable = (icon: string, data: IPatients) => {
    //     console.log(icon);
    //     console.log(data);
    //     if(icon == 'agregar'){
    //         console.log(data); 
    //     }
    // }

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
                    <button onClick={() => navigate('/pacientes/añadir')}>
                        <i className="add-icon fa-solid fa-circle-plus" /> AÑADIR PACIENTE
                    </button>
                </div>
                <TableComponent columns={columns} dataTable={dataPatients}/>
                <PaginationButtons/>
            </div>
        </div>
    )
}