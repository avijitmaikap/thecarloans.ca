export default function Result({ val }) {
  return (
    <div className="App">
      <button onClick={val.prev}>Back to Edit</button>

      <p>
        <h2>First_name : {val.state.fname}</h2>
        <h2>Last_name : {val.state.lname}</h2>
        <h2>Email : {val.state.email}</h2>
        <h2>Mobile : {val.state.mobile}</h2>
        <h2>Car : {val.state.select_car}</h2>

        <h2>Price : {val.state.price}</h2>
      </p>

      <button onCLick={val.submit}>Submit</button>
    </div>
  );
}
