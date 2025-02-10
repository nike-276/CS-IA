import { useNavigate } from "react-router-dom";

const homeButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
};

export default homeButton;
