import "./styles/Step1.scss";
export default function StepOne({ val }) {
  return (
    <div className="step1">
      <input
        type="text"
        name="fname"
        value={val.state.fname}
        onChange={(e) => {
          val.handleChange(e.target.name, e.target.value);
        }}
        required
      />
      <input
        type="text"
        name="lname"
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
