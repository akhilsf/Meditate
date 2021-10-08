import { createContext } from 'react';

const SessionContext = createContext({
  inSession: false,
  setSession: () => {},
  time: 600,
  setTime: () => {},
});

export default SessionContext;
