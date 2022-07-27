import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({children, modal, setModal}) => {

    let cls = [classes.myModal]
    if(modal) {
        cls.push(classes.active)
    }

    return (
        <div className={cls.join(' ')} onClick={() => setModal(false)}>
            <div className={classes.myContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;