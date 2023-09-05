import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../Redux/PollutionSlice';
import rightArrow from '../assets/right-arrow.png';

const Countries = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.pollution);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCountries = data.filter((item) => item.name.common.toLowerCase()
    .includes(searchQuery.toLowerCase()));

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <div className="countriesContainer">
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search your country"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button">Search</button>
        </div>
        {filteredCountries.map((item, index) => (
          <div className="card" key={item.name.common}>
            <Link to={`/pollution/${item.latlng[0]}/${item.latlng[1]}/${index}`}>
              <img src={rightArrow} alt="" />
            </Link>
            <img className="flag" src={item.flags.png} alt="" />
            <h3>{item.name.common}</h3>
            <h4>{item.population}</h4>
          </div>
        ))}
      </div>
    );
  }

  return content;
};

export default Countries;
