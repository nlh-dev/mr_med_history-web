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
        <div className="input-fields">
          <div className="search_field">
            <input type="text" placeholder="Buscar Historia......." />
          </div>
        </div>
      </div>
    </div>
  );
};
