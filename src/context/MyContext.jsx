import { createContext } from "react";

export const MyContext = createContext();

MyContext.displayName = "BuContextComponent";

function MyContextProvider(props) {
  return (
    <MyContext.Provider value={"Sardorbek"}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyContextProvider
