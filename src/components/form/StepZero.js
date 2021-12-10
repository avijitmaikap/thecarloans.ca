import "./styles/Step0.scss";
export default function StepZero({ val }) {
  return (
    <div className="step0">

      <div class="wrapper">
        <h2>Pick Vehicle Type</h2>
        <input type="radio" name="select" id="option-1" />
        <input type="radio" name="select" id="option-2" />
        <input type="radio" name="select" id="option-3" />
        <label for="option-1" class="option option-1">
          <div class="dot"></div>
          <span>CAR</span>
        </label>

        <label for="option-2" class="option option-2">
          <div class="dot"></div>
          <span>SUV</span>
        </label>

        <label for="option-3" class="option option-3">
          <div class="dot"></div>
          <span>VAN</span>
        </label>
        <button className="btn-rounded rounded-pill" 
          onClick = {val.next}
        > NEXT
          <span>
            <i class="fas fa-arrow-circle-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
}