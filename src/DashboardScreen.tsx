import React from "react";
import { FaTachometerAlt, FaUsers, FaTicketAlt, FaCog, FaChartBar, FaBell, FaFileAlt } from "react-icons/fa";

const DashboardScreen: React.FC = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* HEADER */}
      <div className="row bg-primary text-white align-items-center px-4 py-3">
        <div className="col">
          <h5 className="mb-0 fw-bold">Tableau de bord Administrateur</h5>
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
            <li className="nav-item fw-semibold text-primary">
              <FaTachometerAlt className="me-2" /> Tableau de bord
            </li>
            <li className="nav-item text-muted">
              <FaUsers className="me-2" /> Gestion des utilisateurs
            </li>
            <li className="nav-item text-muted">
              <FaTicketAlt className="me-2" /> Gestion des tickets
            </li>
            <li className="nav-item text-muted">
              <FaCog className="me-2" /> Paramètres
            </li>
            <li className="nav-item text-muted">
              <FaChartBar className="me-2" /> Statistiques
            </li>
            <li className="nav-item text-muted">
              <FaBell className="me-2" /> Notifications
            </li>
            <li className="nav-item text-muted">
              <FaFileAlt className="me-2" /> Rapports
            </li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-md-10 p-4">
          {/* STAT CARDS */}
          <div className="row g-3 mb-4">
            {[
              { title: "Nombres de tickets", value: "356", info: "+8% cette semaine" },
              { title: "Nombres de tickets escaladés", value: "892", info: "12 en stock bas" },
              { title: "Utilisateurs", value: "1,247", info: "+15% ce mois" },
              { title: "Nombres de tickets escaladés", value: "892", info: "12 en stock bas" },
              { title: "Nombres de tickets escaladés", value: "892", info: "12 en stock bas" },
              { title: "Nombres de tickets escaladés", value: "892", info: "12 en stock bas" }
            ].map((card, index) => (
              <div key={index} className="col-md-4">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <h6 className="text-primary fw-semibold">{card.title}</h6>
                    <h3 className="fw-bold">{card.value}</h3>
                    <small className="text-muted">{card.info}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TABLE */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h6 className="text-primary fw-bold mb-3">Dernières inscriptions</h6>
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Martin Dupont", email: "martin@email.com", date: "2024-03-15" },
                    { name: "Sophie Leroy", email: "sophie@email.com", date: "2024-03-14" },
                    { name: "Thomas Bernard", email: "thomas@email.com", date: "2024-03-13" }
                  ].map((user, i) => (
                    <tr key={i}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.date}</td>
                      <td className="text-end">
                        <button className="btn btn-success btn-sm me-2">Voir</button>
                        <button className="btn btn-primary btn-sm">Modifier</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="row g-3">
            {[
              { value: "95%", label: "Satisfaction clients" },
              { value: "2.3s", label: "Temps de réponse moyen" },
              { value: "24/7", label: "Disponibilité système" }
            ].map((stat, i) => (
              <div key={i} className="col-md-4">
                <div className="card border-0 shadow-sm text-center">
                  <div className="card-body">
                    <h3 className="fw-bold text-primary">{stat.value}</h3>
                    <small className="text-muted">{stat.label}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardScreen;
