import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StyledUserButton } from "./styles";



function UserButton() {
  return (

      <StyledUserButton>
          <Link to="/login">
                <FaRegUser />
                <span>Login</span>
          </Link>
      </StyledUserButton>

  );
}

export default UserButton;