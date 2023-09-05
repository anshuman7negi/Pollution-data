import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPollutionData } from '../Redux/PollutionSlice';

const Pollution = () => {
  const { lat, lon, index } = useParams();
  const dispatch = useDispatch();
  const { data, pollutionData, isPollutionLoading } = useSelector((state) => state.pollution);

  useEffect(() => {
    dispatch(getPollutionData({ lat, lon }));
  }, [dispatch, lat, lon]);

  let content;

  if (isPollutionLoading || pollutionData.length === 0) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <div className="pollutionContainer">
        <div className="countryDetails">
          <img src={data[index].flags.png} alt="" />
          <p>
            <span>Capital</span>
            <span>{data[index].capital[0]}</span>
          </p>
          <p>
            <span>Area</span>
            <span>{data[index].area}</span>
          </p>
        </div>
        <h3>Air pollution</h3>
        <ul>
          <li>
            <span>Сoncentration of CO Carbon monoxide:</span>
            <span>{pollutionData?.components.co}</span>
          </li>
          <li>
            <span>Сoncentration of NO Nitrogen monoxide:</span>
            <span>{pollutionData?.components.no}</span>
          </li>
          <li>
            <span>Сoncentration of NO2 Nitrogen dioxide:</span>
            <span>{pollutionData?.components.no2}</span>
          </li>
          <li>
            <span>Сoncentration of O3 Ozone:</span>
            <span>{pollutionData?.components.o3}</span>
          </li>
          <li>
            <span>Сoncentration of SO2 Sulphur dioxide:</span>
            <span>{pollutionData?.components.so2}</span>
          </li>
          <li>
            <span>Сoncentration of PM2.5 Fine particles matter:</span>
            <span>{pollutionData?.components.pm2_5}</span>
          </li>
          <li>
            <span>Сoncentration of PM10 Coarse particulate matter:</span>
            <span>{pollutionData?.components.pm10}</span>
          </li>
          <li>
            <span>Сoncentration of NH3 Ammonia:</span>
            <span>{pollutionData?.components.nh3}</span>
          </li>
        </ul>

      </div>
    );
  }

  return content;
};

export default Pollution;
