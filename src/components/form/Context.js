import { createContext, useState } from "react";
import App from "./App";

const Context = createContext();

export default function Provider() {
  const [state, setState] = useState({
    vehicleType:"CAR",
    step: 0,
    fname: "",
    lname: "",
    email:"",
    mobile:"",
    select_car:"",
    price:""
  });

  const handleChange = (k, v) => {
    // k key v val
    setState({
      ...state,
      [k]: v
    });
  };

  const submit = () => {
    
  };

  const next = () => {
    setState({ ...state, step: state.step + 1 });
  };

  const prev = () => {
    setState({ ...state, step: state.step - 1 });
  };

  return (
    <Context.Provider
      value={{
        state,
        handleChange,
        submit,
        next,
        prev
      }}
    >
      <App />
    </Context.Provider>
  );
}

export const Consumer = Context.Consumer;
