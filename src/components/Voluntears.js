import React from 'react';
import useFetchData from '../hooks/useFetchData';
import styles from '../styles/Voluntears.module.css';
import Voluntear from './Voluntear';

const Voluntears = () => {
    const url = `http://localhost:5000/service`
    const [services] = useFetchData(url);
    
    return (
        <div className={styles.pageContaoner}>
            <h1 className={styles.header}>i grow by helping people in need</h1>
            <div className={styles.searchBox}>
            <input  placeholder='search...' type="text" />
            <button className='btn'>search</button>
            </div>
            <div className={styles.voluntearContainer}>
                {
                    services.map((service) => <Voluntear service={service} key={service._id}/>)
                }
            </div>
        </div>
    );
};

export default Voluntears;