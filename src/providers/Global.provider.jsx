import React, { useEffect, useContext, useCallback, useReducer } from 'react';

import { AUTH_STORAGE_KEY } from '../utils/constants';
import { storage } from '../utils/storage';

const GlobalContext = React.createContext(null);

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an GlobalProvider!`);
  }
  return context;
}

// eslint-disable-next-line react/prop-types
function GlobalProvider({ children }) {
  const initialState = {
    theme: 'light',
    isDarkTheme: '',
    isDark: false,
    inputValue: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'light':
        return {
          ...state,
          theme: 'light',
          isDarkTheme: '',
        };
      case 'dark':
        return {
          ...state,
          theme: 'dark',
          isDarkTheme: 'dark',
        };
      case 'isDark':
        return {
          ...state,
          isDark: !state.isDark,
        };
      case 'inputValue':
        return {
          ...state,
          inputValue: action.payload,
        };
      case 'authenticated':
        return {
          ...state,
          authenticated: action.payload,
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    dispatch({
      type: 'authenticated',
      payload: isAuthenticated,
    });
  }, []);

  const login = useCallback(() => {
    dispatch({
      type: 'authenticated',
      payload: true,
    });
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    dispatch({
      type: 'authenticated',
      payload: false,
    });
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  const toggleTheme = () => {
    state.isDarkTheme
      ? dispatch({ type: 'light' })
      : dispatch({ type: 'dark' });
    dispatch({ type: 'isDark' });
  };

  const handleChange = (event) => {
    dispatch({
      type: 'inputValue',
      payload: event.currentTarget.value,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        login,
        logout,
        toggleTheme,
        handleChange,
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobalContext };
export default GlobalProvider;
