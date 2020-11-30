import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        <div className={classes.dialog}>
          Dimych
        </div>
        <div className={classes.dialog + ' ' + classes.active}>
          Andrey
        </div>
        <div className={classes.dialog}>
          Ania
        </div>
        <div className={classes.dialog}>
          Tima
        </div>
        <div className={classes.dialog}>
          Sasha
        </div>
        <div className={classes.dialog}>
          Vika
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>What you doing?</div>
        <div className={classes.message}>I'm fine!</div>
      </div>
    </div>
  );
}

export default Dialogs;