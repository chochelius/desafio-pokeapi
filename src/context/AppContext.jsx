//this is the context file
//this will only be used to pass the props to the children components
//the state will be managed in the reducer
import React, { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
    }

export { AppProvider };
export default AppContext;
