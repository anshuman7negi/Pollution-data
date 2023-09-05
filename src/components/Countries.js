import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/PollutionSlice';

const Countries = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.pollution);
  console.log(isLoading);
  console.log(data);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      hellow
    </div>
  );
};

export default Countries;
