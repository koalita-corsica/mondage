import React, { useState } from 'react';

export const myContext = React.createContext();

const Provider = props => {
  const [isEN, setTheme] = useState(false);

  return (
    <myContext.Provider value={{
      isEN,
      changeTheme: () => setTheme(!isEN)
    }}>
      {props.children}
    </myContext.Provider>
  )
};

export default ({ element }) => (
    <Provider>
      {element}
    </Provider>
  );