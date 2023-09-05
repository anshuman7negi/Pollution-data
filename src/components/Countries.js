import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/PollutionSlice';

const Countries = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.pollution);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <div className="countriesContainer">
        {data.map((item) => (
          <div className="card" key={item.name.common}>
            <p>arrow</p>
            <img src={item.flags.png} alt="" />
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
