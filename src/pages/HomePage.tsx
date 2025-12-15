import { Navigate } from "react-router";

export function HomePage() {
  const username = localStorage.getItem("username");

  if (!username) return <Navigate to={"/login"} />;
  return <div>Bienvenue Monsieur {username}</div>;
}
