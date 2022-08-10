import React, {Component} from 'react';
import style from './Form.module.css'
import Input from "../Fields/Input/Input";
import Textarea from "../Fields/Textarea/Textarea";
import Button from "../Button/Button";

class Form extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <form>
          <Input label={'Name'} type={'text'} name={'name'} placeholder={'Enter your name'}/>
          <Input label={'Last name'} type={'text'} name={'last name'} placeholder={'Enter your last name'}/>
          <Input label={'Date of birthday'} type={'date'} name={'birthday'}
                 placeholder={'Enter your date of birthday'}/>
          <Input label={'Phone'} type={'tel'} placeholder={'Enter your phone number'}/>
          <Input label={'Web site'} type={'url'} name={'web-site'} placeholder={'Enter your web-site'}/>
          <Textarea label={'About you'} name={'about you'} rows={7} placeholder={'Write some about you'}/>
          <Textarea
            label={'Technology stack'}
            name={'technology stack'}
            rows={7}
            placeholder={'Write your technology stack'}/>
          <Textarea
            label={'Descriptions of the latest projects'}
            name={'description latest project'}
            rows={7}
            placeholder={'Write some about your latest project'}/>
          <Button/>
        </form>
      </div>
    );
  }
}

export default Form;