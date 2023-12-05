import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      setError("");
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="w-50 ms-5 mt-2 me-5">
      <h1>Signin</h1>
      {error && <div>{error}</div>}
      <input
        value={credentials.username}
        className="form-control mb-3"
        placeholder="Username"
        name="username"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        value={credentials.password}
        className="form-control mb-3"
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={signin} className="btn btn-primary focus">
        Signin
      </button>
    </div>
  );
}
export default Signin;
