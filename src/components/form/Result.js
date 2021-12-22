export default function Result({ val }) {
  return (
    <div className="result">
      
      <div className="wrapper">

      
      <h2>One Step Away</h2>
      <h3>To Finish up !</h3>
      <div className ="confirmation">
        <input type="checkbox"/>
        <span>
          I am over 18 years old
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur magnam in alias facere suscipit placeat neque iste culpa quam similique laboriosam,
        </p>
      </div>

      <div className="buttons">
          <button onClick={val.prev} type="button" className="rounded-pill btn-rounded">
            EDIT {/*PREV*/}
              <span className="prev">
              <i class="far fa-edit"></i>
            </span>
          </button>
          <button onClick={val.submit} type="button" className="rounded-pill btn-rounded">
            SUBMIT
              <span>
              <i class="fas fa-check"></i>
            </span>
          </button>
        </div>
        </div>
    </div>
  );
}
