import { Consumer } from "./Context";
import Result from "./Result";
import StepZero from "./StepZero";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import "./styles/App.scss";


export default function App() {
  return (
    <div className="App">
      <h2>What is your name ?</h2>
      <Consumer>
        {(value) => {
          switch (value.state.step) {
            case 0:
              return <StepZero val={value} />;
              break;
            case 1:
              return <StepOne val={value} />;
              break;

            case 2:
              return <StepTwo val={value} />;
              break;

            case 3:
              return <StepThree val={value} />;
              break;

            default:
              return <Result val={value} />;
          }
        }}
      </Consumer>
    </div>
  );
}
