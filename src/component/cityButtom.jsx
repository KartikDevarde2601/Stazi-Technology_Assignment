import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import styles from './cityButtom.module.css';
import { setSelectedCity } from '../redux/setpropertiesSlice'; // Replace with your actual Redux slice import

const CityButtons = () => {

const cities = ['Mumbai', 'London', 'New York', 'Paris'];

const activeCity = useSelector((state) => state.properties.selectedCity);
  
const dispatch = useDispatch();

  const handleCityButtonClick = (city) => {
    console.log(`You clicked on ${city}`);
    dispatch(setSelectedCity(city));
  };

  console.log(activeCity)

  const handleViewMoreClick = () => {
    console.log('View More button clicked');
  };

  return (
    <div className={styles.container}>
      <div className={styles['city-buttons']}>
        {cities.map((city, index) => (
          <button
            key={index}
            onClick={() => handleCityButtonClick(city)}
            className={activeCity === city ? styles['active-city-button'] : styles['city-button']}
          >
            {city}
          </button>
        ))}
      </div>
      <button className={styles['view-more']} onClick={handleViewMoreClick}>
        View More
      </button>
    </div>
  );
};

export default CityButtons;
