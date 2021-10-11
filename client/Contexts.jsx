import { createContext } from 'react';

const SessionContext = createContext({
  inMeditation: false,
  setInMeditation: () => {},
  time: 600,
  setTime: () => {},
  inSession: false,
  setPause: () => {},
});

export default SessionContext;
