import { createContext } from 'react';

const SessionContext = createContext({
  inSession: false,
  setSession: () => {}
});

export default SessionContext;
