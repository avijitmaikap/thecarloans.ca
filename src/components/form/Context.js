import { createContext, useState } from "react";
import App from "./App";
import emailjs from "emailjs-com";

const Context = createContext();

export default function Provider() {
  const [state, setState] = useState({
    vehicleType:"car",
    step: 0,
    fname: "",
    lname: "",
    email:"",
    mobile:"",
    brands:"honda",
    budget:"$150-$300"
  });

  const handleChange = (k, v) => {
    // k key v val
    setState({
      ...state,
      [k]: v
    });
  };

  const submit = async () => {
    console.log(process.env.REACT_APP_EMAIL_USERID)
    const response = await emailjs.send(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, state, process.env.REACT_APP_EMAIL_USERID);
    
    console.log(response)
    setState({ ...state, step: state.step + 1 });
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
