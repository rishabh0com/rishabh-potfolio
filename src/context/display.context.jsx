import { createContext } from "react";
import { useState } from "react";

const DisplayContext = createContext();

const DisplayProvider = ({ children }) => {
  const [display, setDisplay] = useState(false);

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};

export { DisplayProvider, DisplayContext };
