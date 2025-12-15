import { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { Navigate } from "react-router";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const [user, setUser] = useState(null);

  const sendLoginRequest = async (email: string, password: string) => {
    const result = await axios.post(
      "http://localhost:8080/auth/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    return result.data.data;
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    sendLoginRequest(email, password).then((result) => {
      localStorage.setItem("username", result.firstname);
      setUser(result);
    });
  };

  if (user) return <Navigate to={"/"} />;

  return (
    <div className="body">
      <div className="container">
        <h2>Connexion</h2>
        <form>
          <label>Email</label>
          <input
            type="email"
            placeholder="Entrer votre email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="Entrer votre mot de passe"
            onChange={(e) => setPasword(e.currentTarget.value)}
          />

          <button type="submit" onClick={handleLogin}>
            Se connecter
          </button>

          <div className="link">
            <a href="#">Mot de passe oublié ?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
