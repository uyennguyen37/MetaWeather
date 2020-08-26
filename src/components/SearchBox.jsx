import React from 'react';
import { AutoComplete, Spin } from 'antd';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import './SearchBox.css'
import { searchLocation } from '../actions/weatherActions'

const SearchBox = ({
  onSelectCity,
}) => {
  const dispatch = useDispatch();
  const { searching, cities } = useSelector((state) => state.weatherReducer);

  const handleSearchChange = debounce((value) => {
    dispatch(searchLocation(value))
  }, 500);

  const getWoeid = (fullText) => fullText.split('-')[1].trim();

  const handleSelectCity = (value) => {
    const woeid = getWoeid(value);
    onSelectCity(woeid);
  };

  return (
    <AutoComplete
      className="search-box"
      placeholder="Please enter city name to search"
      notFoundContent={searching ? <Spin size="small" /> : 'Not found'}
      onSearch={handleSearchChange}
      onSelect={handleSelectCity}>
      {cities.map((city) => (
        <AutoComplete.Option key={`${city.title} - ${city.woeid}`}>
          {city.title} - {city.woeid}
        </AutoComplete.Option>
      ))}
    </AutoComplete>
  );
};

export default SearchBox;