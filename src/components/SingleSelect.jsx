// import React from 'react'
import Select from "react-select";
const SingleSelect = ({ options, value, onChange }) => {
  return (
    <div className="text-red-700"> 

    <Select 
   
   options={options}
   onChange={(e)=> onChange(e.technologies)}
   value={value ? { label: value, value } : null}
  //  onChange={(selected) => onChange(selected.value)}
   />
   </div>
  );
};

export default SingleSelect;
