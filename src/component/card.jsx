import { AiFillHeart } from "react-icons/ai";
import { FaHotel, FaBath } from "react-icons/fa";
import { BiSolidBed, BiSolidArea } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import React from "react";
import styles from './card.module.css'



const PropertyCard = ({ property }) => {
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={property.image} alt="Property" />
          <div className={styles.overlapIcon}>
            <div className={styles.label}>
              <p>For Rent</p>
            </div>
            <AiFillHeart size={35} color={"white"} />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.location}>
            <MdLocationOn className={styles.locationIcon} />
            <p>{property.pincode}</p>
          </div>
          <h2 className={styles.propertyName}>
            {`${property.name}, ${property.short_address}`}
          </h2>
          <div className={styles.infoIcons}>
            <div className={styles.infoIcon}>
              <FaHotel size={25} />
              <p>{`${property.available_rooms} Room`}</p>
            </div>
            <div className={styles.infoIcon}>
              <BiSolidBed size={25} />
              <p>{`${property.beds} Bed`}</p>
            </div>
            <div className={styles.infoIcon}>
              <FaBath size={25} />
              <p>{`${property.bathroom} Bath`}</p>
            </div>
            <div className={styles.infoIcon}>
              <BiSolidArea size={25} />
              <p>{property.height}</p>
            </div>
          </div>
          <div className={styles.footer}>
            <h2>
              <span>{property.price}</span>/month
            </h2>
            <button className={styles.button}>Read more</button>
          </div>
        </div>
      </div>
    );
  };

  export default PropertyCard;