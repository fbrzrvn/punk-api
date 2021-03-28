import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ ...props }) {
  const { user } = useSelector(state => state);

  return user ? <Route {...props} /> : <Redirect to="/login" />;
}

export default ProtectedRoute;
