

import '../pages.css'
import './AddRegister.css'

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
                <div className="register-form">
                    <form>
                        <div className="patient-info">
                            <div>
                                <div className="label-info">
                                    <h4>NOMBRE Y APELLIDO</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>CÉDULA DE IDENTIDAD</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>NÚMERO DE TELEFONO</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                        </div>

                        <div className="patient-info">
                            <div>
                                <div className="label-info">
                                    <h4>DIRECCIÓN DE DOMICILIO</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>MUNICIPIO</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>PARROQUIA</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                        </div>

                        <div className="patient-info">
                            <div>
                                <div className="label-info">
                                    <h4>ESTADO</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>PAIS</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>FECHA DE NACIMIENTO</h4>
                                </div>
                                <div className="input-field">
                                    <input type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="patient-info">
                            <div>
                                <div className="label-info">
                                    <h4>LUGAR DE NACIMIENTO</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>ANALFABETA</h4>
                                </div>
                                <div className="input-field-selector">
                                    <select>
                                        <option value="">SELECCIONE</option>
                                        <option value="">OPCION 1</option>
                                        <option value="">OPCION 2</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>ESTADO CIVIL</h4>
                                </div>
                                <div className="input-field-selector">
                                    <select>
                                        <option value="">SELECCIONE</option>
                                        <option value="">OPCION 1</option>
                                        <option value="">OPCION 2</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>ESTUDIOS</h4>
                                </div>
                                <div className="input-field">
                                    <select>
                                        <option value="">SELECCIONE</option>
                                        <option value="">OPCION 1</option>
                                        <option value="">OPCION 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="patient-info">
                            <div>
                                <div className="label-info">
                                    <h4>NOMBRE DEL PADRE</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>OCUPACIÓN DEL PADRE</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                            <div>
                                <div className="label-info">
                                    <h4>NOMBRE DE LA MADRE</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                        </div>
                        <div className="patient-info">
                            <div>
                                <div className="label-info">
                                    <h4>OCUPACIÓN DE LA MADRE</h4>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder='INSERTE.....' />
                                </div>
                            </div>
                        </div>
                            <div className="buttons-field">
                                <div className="save-button">
                                    <button type='submit'><i className="fa-solid fa-floppy-disk"/>  GUARDAR</button>
                                </div>
                                <div className="cancel-button">
                                    <button type='submit'><i className="fa-solid fa-ban"/>  CANCELAR</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}