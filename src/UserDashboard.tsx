import React from "react";
import { FaUsers, FaTachometerAlt, FaCog, FaChartBar, FaBell, FaFileAlt } from "react-icons/fa";

const UserDashboard: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
      {/* HEADER */}
      <div className="row bg-primary text-white align-items-center px-4 py-3">
        <div className="col">
          <h5 className="mb-0 fw-bold">Gestion des utilisateurs</h5>
        </div>
        <div className="col text-end">
          <span className="me-3">Admin</span>
          <button className="btn btn-outline-light btn-sm">Déconnexion</button>
        </div>
      </div>

      <div className="row">
        {/* SIDEBAR */}
        <aside className="col-md-2 bg-white border-end min-vh-100 p-3">
          <ul className="nav flex-column gap-2">
            <li className="nav-item fw-semibold text-primary d-flex align-items-center p-2 rounded" style={{ cursor: 'pointer', transition: '0.3s' }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
              <FaTachometerAlt className="me-2" /> Tableau de bord
            </li>
            <li className="nav-item text-muted d-flex align-items-center p-2 rounded" style={{ cursor: 'pointer', transition: '0.3s' }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
              <FaUsers className="me-2" /> Gestion des utilisateurs
            </li>
            <li className="nav-item text-muted d-flex align-items-center p-2 rounded" style={{ cursor: 'pointer', transition: '0.3s' }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
              <FaCog className="me-2" /> Paramètres
            </li>
            <li className="nav-item text-muted d-flex align-items-center p-2 rounded" style={{ cursor: 'pointer', transition: '0.3s' }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
              <FaChartBar className="me-2" /> Statistiques
            </li>
            <li className="nav-item text-muted d-flex align-items-center p-2 rounded" style={{ cursor: 'pointer', transition: '0.3s' }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
              <FaBell className="me-2" /> Notifications
            </li>
            <li className="nav-item text-muted d-flex align-items-center p-2 rounded" style={{ cursor: 'pointer', transition: '0.3s' }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
              <FaFileAlt className="me-2" /> Rapports
            </li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-md-10 p-4">
          {/* TABLE PERMISSIONS */}
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Permissions</h5>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Nom complet</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Kokou AKAKPO", email: "kokou@gmail.com", role: "Citoyen", status: "Actif" },
                      { name: "Prosper AMELEMDJI", email: "prosper@gmail.com", role: "Citoyen", status: "Actif" },
                      { name: "Brahim TRADRE", email: "brahim@gmail.com", role: "Administrateur", status: "Actif" },
                      { name: "Aicha KONE", email: "aicha@gmail.com", role: "Citoyen", status: "Actif" },
                      { name: "Maglore SUNU", email: "maglore@gmail.com", role: "Citoyen", status: "Actif" },
                      { name: "Fail TOURE", email: "fail@gmail.com", role: "Citoyen", status: "Actif" },
                      { name: "Marc CHENE", email: "marc@gmail.com", role: "Citoyen", status: "Actif" }
                    ].map((user, i) => (
                      <tr key={i}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <span className={`badge ${user.role === "Administrateur" ? "bg-primary" : "bg-light text-dark border"}`}>
                            {user.role}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-success">{user.status}</span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary me-2"
                                  style={{ transition: '0.3s' }}
                                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#cfe2ff'}
                                  onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
                            Éditer
                          </button>
                          <button className="btn btn-sm btn-outline-danger"
                                  style={{ transition: '0.3s' }}
                                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#f8d7da'}
                                  onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
                            Désactiver
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="text-muted">Affichage de 1 à 7 sur 7 utilisateurs</div>
                <nav>
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <button className="page-link">Précédent</button>
                    </li>
                    <li className="page-item active"><button className="page-link">1</button></li>
                    <li className="page-item"><button className="page-link">2</button></li>
                    <li className="page-item"><button className="page-link">3</button></li>
                    <li className="page-item">
                      <button className="page-link">Suivant</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
