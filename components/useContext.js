import React, { useContext } from "react";

const JediContext = React.createContext();

function Display() {
  const value = useContext(JediContext);

  return <div>{value}, I am your Father!</div>;
}

export function App() {
  return (
    <JediContext.Provider value={"Luke"}>
      <Display />
    </JediContext.Provider>
  );
}
