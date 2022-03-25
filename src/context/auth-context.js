import { createContext, useContext, useReducer, useEffect } from 'react';
import { authReducer, initialState } from '../store/auth/reducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, dispatchAuth] = useReducer(authReducer, initialState);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser?.userDetails && currentUser?.encodedToken) {
      dispatchAuth({ type: 'LOGIN', payload: currentUser });
    }
  }, [dispatchAuth]);

  return (
    <AuthContext.Provider value={{ user, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
