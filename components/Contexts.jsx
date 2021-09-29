import {createContext} from 'react';

const SessionContext = createContext({
  page: 'home',
  inSession: false,
});

export default SessionContext;
