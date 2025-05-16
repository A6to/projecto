import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext';
import Swal from 'sweetalert2'; // npm install sweetalert2

const GuestOnlyRoute = ({ children }) => {
  const { user, logout } = useAuth();

  if (user) {
    Swal.fire({
      title: 'Already Logged In',
      text: 'You need to logout before accessing this page',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Logout Now',
      cancelButtonText: 'Stay Logged In'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        window.location.href = '/signup'; // Full reload to clear state
      } else {
        window.location.href = '/dashboard';
      }
    });

    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default GuestOnlyRoute;