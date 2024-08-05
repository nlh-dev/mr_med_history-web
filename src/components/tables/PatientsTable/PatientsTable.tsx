import './PatientsTable.css'
import './PatientsTable.data'


export const InfoTable = () => {
    return (
        <div className="table">
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>NOMBRE Y APELLIDO</th>
                            <th>FECHA DE REGISTRO</th>
                            <th>OPCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DANNY MORAN</td>
                            <td>03/05/2025</td>
                            <td><button><i className="fa-solid fa-eye"/> VER</button></td>
                        </tr>
                        <tr>
                            <td>DANNY MORAN</td>
                            <td>03/05/2025</td>
                            <td><button className="fa-solid fa-eye" /></td>
                        </tr>
                        <tr>
                            <td>DANNY MORAN</td>
                            <td>03/05/2025</td>
                            <td><button className="fa-solid fa-eye"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}