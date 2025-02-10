import { useNavigate } from "react-router-dom";

const SearchButton = (props: any) => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/search")}>Home</button>
    </>
  );
};

export default SearchButton;
