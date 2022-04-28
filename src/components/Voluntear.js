import React from 'react';
import styles from '../styles/Voluntear.module.css';

const Voluntear = ({service}) => {
    const {name,img} = service;
    return (
        <div className={styles.voluntear}>
            <img src={img} alt="" />
            <p className={styles.serviceName}>{name}</p>
        </div>
    );
};

export default Voluntear;