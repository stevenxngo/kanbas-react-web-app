import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  };
  return (
    <div className="w-50 ms-5 mt-2 me-5">
      <h1>Signin</h1>
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
