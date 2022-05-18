import {defineComponent} from 'vue';
import s from './input_pad.module.scss';

const InputPad = defineComponent({
  setup() {
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '清空', '提交'];
    const append = (value: string) => {}
    return () => <>
      <div class={s.date_amount}>
        <input type="date" value={'2022-05-20'} />
        <span class={s.amount}>199.99</span>
      </div>
      <div class={s.button_wrapper}>
        {buttons.map(item => (
          <button onClick={() => append(item)}>{item}</button>
        ))}
      </div>
    </>
  }
});


export default InputPad;
