import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/home")}>Home</button>
    </>
  );
};

export default HomeButton;
