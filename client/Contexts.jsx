import { createContext } from 'react';

const SessionContext = createContext({
  inMeditation: false,
  setInMeditation: () => {},
  time: 600,
  setTime: () => {},
  inSession: false,
  setInSession: () => {},
  sessionFinished: false,
  setSessionFinished: () => {},
});

export default SessionContext;
