import { Consumer } from "./Context";
import Result from "./Result";
import StepZero from "./StepZero";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import Success from "./Success"
import "../../styles/form.scss";


export default function App() {
  return (
    <div className="form">
      
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

            case 4:
              return <Result val={value} />;
              break;

            case 5:
              return <Success/>
              
            default: return null  

          }
        }}
      </Consumer>
    </div>
  );
}
