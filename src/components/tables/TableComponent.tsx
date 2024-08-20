import { ITableComponent, tablecomponent } from './TableComponent.data'
import './TableComponent.css'

export const TableComponent = () => {
    return (
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
                {tablecomponent.map((table: ITableComponent) => (
                    <tr>
                        <td>{table.full_name}</td>
                        <td>{table.id_number}</td>
                        <td>{table.phone_number}</td>
                        <td>{table.mhistory_id}</td>
                        <td>
                            <div className="buttons">

                                <div className='add_button'>
                                    <button>
                                        <i className={table.add_button} />
                                    </button>
                                </div>

                                <div className='info_button'>
                                    <button>
                                        <i className={table.info_button} />
                                    </button>
                                </div>

                                <div className='edit_button'>
                                    <button>
                                        <i className={table.edit_button} />
                                    </button>
                                </div>

                                <div className='delete_button'>
                                    <button>
                                        <i className={table.delete_button} />
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}