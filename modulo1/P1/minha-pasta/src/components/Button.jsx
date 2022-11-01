import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/novatela");
      }}
    >
      Nova tela
    </button>
  );
};

export default Button;
