import "./styles/Step0.scss";
export default function StepZero({ val }) {
  return (
    <div className="step0">
      <input
        type="radio"
        name="CAR"
        value={val.state.fname}
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
        required
        />
       
      <input
        type="radio"
        name="SUV"
        value={val.state.fname}
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
        required
      />
      <input
        type="radio"
        name="VAN"
        value={val.state.lname}
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
      />
      <button onClick={val.next} type="button" className="btn rounded-pill btn-rounded">
              Next
              <span>
              <i class="fas fa-arrow-circle-right"></i>
              </span>
            </button>
    </div>
  );
}