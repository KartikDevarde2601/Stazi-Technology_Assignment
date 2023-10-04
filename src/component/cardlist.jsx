import React from "react";
import { useSelector } from "react-redux";
import styles from "./cardlist.module.css";
import PropertyCard from "./card";


const Cardlist = () => {
  const properties = useSelector((state) => state.properties.properties);
  const selectedCity = useSelector((state) => state.properties.selectedCity);
  const displayedProperties = useSelector((state) => state.properties.displayedProperties)


  const filteredProperties = selectedCity
  ? properties.filter((property) => property.city === selectedCity)
  : properties;



  return (
    <div className={styles.listContainer}>
      {filteredProperties.slice(0, displayedProperties).map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Cardlist;
