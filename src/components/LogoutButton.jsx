import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <button
      onClick={logout}
      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
    >
      Logout
    </button>
  );
}

export default LogoutButton;