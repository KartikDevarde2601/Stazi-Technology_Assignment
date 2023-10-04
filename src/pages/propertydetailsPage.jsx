import React from 'react';
import styles from './propertydetailsPage.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropertyCard from '../component/card';

const PropertyDetails = () => {
  const { id } = useParams();
  const properties = useSelector((state) => state.properties.properties);
  
  const property = properties.find((Property) => Property.id === parseInt(id));

  
  const selectedCity = useSelector((state) => state.properties.selectedCity);

 
  const filteredProperties = selectedCity
  ? properties.filter((property_rec) => property_rec.city === selectedCity)
  : properties;

  return (
    <div className={styles.mainContainer}>
    <div className={styles['property-details-container']}>
      <div className={styles['property-details-image']}>
        <img src={property.image} alt={property.title} />
      </div>
      <div className={styles['property-details-content']}>
        <div className={styles['details']}>
          <h1>{property.name}</h1>
          <p className={styles['price']}>Price: {property.price}</p>
          <p>Bedrooms: {property.available_rooms}</p>
          <p>Bathrooms: {property.bathroom}</p>
          <p className={styles['location']}>Location: {property.short_address}</p>
        </div>
        <p className={styles['description']}>
          Welcome to your dream apartment in the heart of New York City! This stunning 2-bedroom, 2-bathroom apartment offers a luxurious and comfortable living space in one of the most vibrant and iconic neighborhoods in the world. Located in the heart of the city, this property promises an unforgettable New York experience. Welcome to your dream apartment in the heart of New York City! This stunning 2-bedroom, 2-bathroom apartment offers a luxurious and comfortable living space in one of the most vibrant and iconic neighborhoods in the world. Located in the heart of the city, this property promises an unforgettable New York experience
        </p>
      </div>
     </div>
     <div>
        <h1>Recommeded Proproties For You</h1>
     </div>
     <div className={styles.listContainer}>
      {filteredProperties.slice(0, 3).map((property_rec) => (
        <PropertyCard key={property_rec.id} property={property_rec} />
      ))}
    </div>
    </div>
  );
};

export default PropertyDetails;
