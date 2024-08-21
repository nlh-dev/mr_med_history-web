import { TableComponent } from "../../components/tables/TableComponent";
import { dataDiagnosis, IDiagnosis, diagnosisColums } from "./Diagnosis.data";
import { PaginationButtons } from "../../components/UI/PaginationButtons";
import { useState } from "react";
import "../pages.css";
import './Diagnosis.css'

export const Diagnosis = () => {
  const [columns, setColumns] = useState(diagnosisColums);

  const getDataTable = (icon: string, data: IDiagnosis) => {
    console.log(icon);
    console.log(data);
  };

  return (
    <div className="pages-index">
      <div className="pages-index">
        <div className="start-pages">
          <h2>DIAGNOSITCO</h2>
          <div className="user-info">
            <div className="fullname">
              <h2>Nombre y Apellido</h2>
            </div>
            <div className="user-type">
              <h2>(Tipo de Usuario)</h2>
            </div>
          </div>
        </div>
        <hr />
        <div className="add_diagnosis">
          <div className="search_field">
            <input type="text" placeholder="Buscar Diagnostico......." />
          </div>
          <button>
            <i className="add-icon fa-solid fa-circle-plus" /> AÑADIR DIAGNOSTICO
          </button>
        </div>
        <TableComponent columns={columns} dataTable={dataDiagnosis} returndata={getDataTable}/>
        <PaginationButtons/>
      </div>
    </div>
  );
};
