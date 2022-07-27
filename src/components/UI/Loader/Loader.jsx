import React from 'react';
import cls from './Loader.module.css'

const Loader = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
          <div className={cls.Loader}></div>
        </div>
    );
};

export default Loader;