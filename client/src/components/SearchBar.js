import React from 'react';

export const SearchBar = (props) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input type = 'search'
     style={BarStyling}
     placeholder={props.placeholder}
     onChange={props.handleChange}
    />
  );
}

export default SearchBar;