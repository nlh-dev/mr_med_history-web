import { TableComponent } from "../../components/tables/TableComponent";
import { PaginationButtons } from "../../components/UI/PaginationButtons";
import { dataMedHistory, medhistoryColumns } from "./MedHistory.data";
import './MedHistory.css'
import "../pages.css";

export const MedHistory = () => {
  return (
    <div className="pages-index">
      <div className="pages-index">
        <div className="start-pages">
          <h2>HISTORIAS MÉDICAS</h2>
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
        <div className="add_med-history">
          <div className="search_field">
            <input type="text" placeholder="Buscar Historia......." />
          </div>
          <button>
            <i className="add-icon fa-solid fa-circle-plus" /> AÑADIR HISTORIA
          </button>
        </div>
        <TableComponent columns={medhistoryColumns} dataTable={dataMedHistory} />
        <PaginationButtons />
      </div>
    </div>
  );
};
