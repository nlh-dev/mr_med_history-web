import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'

import { Sidebar } from './layout/Sidebar'

import { Dashboard } from './pages/Dashboard/Dashboard'
import { MedHistory } from './pages/MedHistory/MedHistory'
import { Patients } from './pages/patients/Patients'
import { Diagnosis } from './pages/Diagnosis/Diagnosis'
import { Doctors } from './pages/Doctors/Doctors'
import { Users } from './pages/Users/Users'
import { Profile } from './pages/Profile/Profile'
import { AddRegister } from './pages/AddRegister/AddRegister'

function App() {

  return (
    <Browser>
      <Routes>
        <Route path='/' element={<Sidebar />}>
          <Route path='/añadir' element={<AddRegister />}/>
          <Route path='/inicio' element={<Dashboard />} />
          <Route path='/historias_medicas' element={<MedHistory />}/>
          <Route path='/pacientes' element={<Patients />}/>
          <Route path='/diagnostico' element={<Diagnosis />}/>
          <Route path='/doctores' element={<Doctors />}/>
          <Route path='/usuarios' element={<Users />}/>
          <Route path='/perfil' element={<Profile />}/>
        </Route>
      </Routes>
    </Browser>
  )
}



export default App
