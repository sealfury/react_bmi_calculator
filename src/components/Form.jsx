import React from "react";

const Form = props => {
  return (
    <form>
      <label htmlFor="weight">Weight</label>
      <input 
        type="number"
        required
        placeholder="Weight in kgs"
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input 
        type="number"
        required 
        placeholder="Heigh in cm"
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button>Calculate BMI</button>
    </form>
  );
};

export default Form;