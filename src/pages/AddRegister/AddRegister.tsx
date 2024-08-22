import './AddRegister.css'
import '../pages.css'

export const AddRegister = () => {

    return (
        <div className='pages-index'>
            <div className='pages-index'>
                <div className='start-pages'>
                    <h2>AÑADIR PACIENTE</h2>
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
                <form action="">
                    <div className="add-register_form">
                        <div className="inputs-labels">
                            <label htmlFor="fullname" className='labels'>NOMBRE Y APELLIDO</label>
                            <div className='inputs'>
                            <input type="text" id='fullname' name='fullname' placeholder='inserte....'/>
                            </div>
                        </div>
                        <div className="inputs-labels">
                            <label htmlFor="fullname" className='labels'>CEDULA DE IDENTIDAD</label>
                            <div className='inputs'>
                            <input type="text" id='fullname' name='fullname' placeholder='inserte....'/>
                            </div>
                        </div>
                        <div className="inputs-labels">
                            <label htmlFor="fullname" className='labels'>NUMERO DE TELÉFONO</label>
                            <div className='inputs'>
                            <input type="text" id='fullname' name='fullname' placeholder='inserte....'/>
                            </div>
                        </div>
                    </div>
                    </form>
            </div>
        </div>
    )
}