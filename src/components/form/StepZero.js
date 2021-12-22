
export default function StepZero({ val }) {
  return (
    <div className="step0">

      <div class="wrapper">
        <h2>Pick Vehicle Type</h2>
        <input type="radio" name="vehicleType" value="car" checked={val.state.vehicleType == "car" ? true : false} 
        onChange={e => val.handleChange(e.target.name, e.target.value)} id="option-1" />
        <input type="radio" name="vehicleType" value="suv" checked={val.state.vehicleType == "suv" ? true : false} 
        onChange={e => val.handleChange(e.target.name, e.target.value)} id="option-2" />
        <input type="radio" name="vehicleType" value="van" checked={val.state.vehicleType == "van" ? true : false} 
        onChange={e => val.handleChange(e.target.name, e.target.value)} id="option-3" />
        <input type="radio" name="vehicleType" value="truck" checked={val.state.vehicleType == "truck" ? true : false} 
        onChange={e => val.handleChange(e.target.name, e.target.value)} id="option-4" />

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
        <label for="option-4" class="option option-4">
          <div class="dot"></div>
          <span>TRUCK</span>
        </label>
        <button className="btn-rounded rounded-pill"
          onClick={val.next}
        > NEXT
          <span>
            <i class="fas fa-arrow-circle-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
}