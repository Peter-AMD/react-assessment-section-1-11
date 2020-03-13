import React, { useState } from 'react';
import { COUNTRY_LIST } from '../../constants/country';

const SearchBar = props => {

  const [searchValues, setSearchValues] = useState({
    country: 'ph',
    newsType: 'top-headlines',
    searchString: '',
  });
  const [previousSearchValues, setPreviousSearchValues] = useState([]);
  const onEnter = (key, e) => e.key === 'Enter' && triggerChangeHandler(key, e);

  const triggerChangeHandler = async (key, event) => {
    const value = {...searchValues, [key]: event.target.value}
    if (JSON.stringify(previousSearchValues) === JSON.stringify(value)) return;
    await setSearchValues(value);
    setPreviousSearchValues(value);
    props.onOptionChange(value);
  };

  return (
    <div>
      <select className="countrylist-dropdown" onChange={(e) => triggerChangeHandler('country',e)}>
        {COUNTRY_LIST.map(country => <option key={country.value} value={country.value}>{country.display}</option>)}
      </select>
      <select className="newstype-dropdown" onChange={(e) => triggerChangeHandler('newsType',e)}>
        <option value="top-headlines">Top headlines</option>
        <option value="everything">Everything</option>
      </select>
      <input placeholder="press enter to search..."type="text" onBlur={(e) => triggerChangeHandler('searchString',e)} onKeyPress={(e) => onEnter('searchString',e)}/>
    </div>
  );
}

export default SearchBar;