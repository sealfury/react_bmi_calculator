import React from "react";
import Select from "react-select";

const options = [
  { value: 'imperial', label: 'Imperial Units' },
  { value: 'metric', label: 'Metric Units' }
]

const Selector = () => (
      <Select 
        placeholder="Select Units" 
        options={options} 
      />  
)

export default Selector