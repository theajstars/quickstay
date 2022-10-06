import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
export default function Auth() {
  const [currentRoute, setCurrentRoute] = useState("login");
  const passRoute = (route) => {
    setCurrentRoute(route);
  };
  return (
    <>
      <div className="auth-container">
        {currentRoute === "login" ? (
          <Login passRoute={passRoute} />
        ) : (
          <Register passRoute={passRoute} />
        )}
      </div>
    </>
  );
}
