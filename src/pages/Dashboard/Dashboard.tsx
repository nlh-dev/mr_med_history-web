import { Cards } from '../../interfaces/Cards'
import '../pages.css'


export const Dashboard = () => {
    return (
        <div className='pages-index'>
            <div className='start-pages'>
                <h2>INICIO</h2>
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
            <Cards/>
        </div>
    )
}