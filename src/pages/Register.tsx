import React from "react";  
import "./Register.css";

export default function Inscription() {
  return (
    <div className="container">
      <div className="card">
        <form>
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input id="nom" type="text" placeholder="Entrer votre nom" />
          </div>

          <div className="form-group">
            <label htmlFor="prenom">Prénom</label>
            <input id="prenom" type="text" placeholder="Entrer votre prénom" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Entrer votre email" />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Téléphone</label>
            <input id="telephone" type="tel" placeholder="Entrer votre numéro" />
          </div>

          <div className="form-group">
            <label htmlFor="adresse">Adresse</label>
            <input id="adresse" type="text" placeholder="Entrer votre adresse" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input id="password" type="password" placeholder="Créer un mot de passe" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input id="confirmPassword" type="password" placeholder="Répéter le mot de passe" />
          </div>

          <button type="submit">S'inscrire</button>
        </form>

        <p className="login-text">
          Déjà inscrit ? <a href="/login">Se connecter</a>
        </p>

        <p className="title">Inscription</p>
      </div>
    </div>
  );
}
