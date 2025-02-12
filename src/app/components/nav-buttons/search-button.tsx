import { useNavigate } from "react-router-dom";

const searchButton = (props: any) => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/search", { replace: true })}>
        Search
      </button>
    </>
  );
};

export default searchButton;
