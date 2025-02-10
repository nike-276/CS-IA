import { useNavigate } from "react-router-dom";

const loginButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/login")}>Login</button>
    </>
  );
};

export default loginButton;
