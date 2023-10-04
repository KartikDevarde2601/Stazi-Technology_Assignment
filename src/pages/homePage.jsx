import React from "react";
import styles from './homePage.module.css'
import CityButtons from "../component/cityButtom";
import CardList from "../component/cardlist";
import {BiLoaderCircle} from 'react-icons/bi';
import { useDispatch } from "react-redux";
import { loadMoreProperties } from "../redux/setpropertiesSlice";

const HomePage =()=>{

  const  dispatch = useDispatch();

    const handleLoadMoreClick = () => {
        dispatch(loadMoreProperties());
      };

    return (
        <div className={styles.container}>
        <CityButtons/>
        <CardList/>
        <div className={styles.buttonContainer}>
        <button onClick={handleLoadMoreClick} className={styles.loadMoreButton}>
            <span className={styles.buttonContent}><BiLoaderCircle size={20}/>Load More</span>
        </button>
        </div>
        
        </div>
    )
}

export default HomePage;