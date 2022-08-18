import React from 'react';
import style from './CompletedForm.module.css';

const CompletedForm = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.fieldWrapper}>
        <h3>Birthday:</h3>
        <p>{props.data.birthday}</p>
      </div>
      <div className={style.fieldWrapper}>
        <h3>Phone:</h3>
        <p>{props.data.phone}</p>
      </div>
      <div className={style.fieldWrapper}>
        <h3>Web-site:</h3>
        <p>{props.data.webSite}</p>
      </div>
      <div className={style.fieldWrapper}>
        <h3>About you:</h3>
        <p>{props.data.aboutYou}</p>
      </div>
      <div className={style.fieldWrapper}>
        <h3>Technology stack:</h3>
        <p>{props.data.technologyStack}</p>
      </div>
      <div className={style.fieldWrapper}>
        <h3>Descriptions of the latest projects:</h3>
        <p>{props.data.lastProject}</p>
      </div>
    </div>
  )
}

export default CompletedForm;