import {defineComponent, ref} from 'vue';
import s from './input_pad.module.scss';

const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '清空', '提交'];

const InputPad = defineComponent({
  setup() {
    const refAmount = ref('0');
    const handlePadClick = (text: string) => {
      switch (text) {
        case '清空':
          refAmount.value = '0';
          break;
        case '提交':
          break;
        default:
          append(text);
      }
    };
    const append = (value: string) => {
      if (refAmount.value.length >= 13) return;

      const dotIndex = refAmount.value.indexOf('.');
      // 最多两位小数
      if (refAmount.value.indexOf('.') !== -1 && refAmount.value.length - dotIndex > 2) return;

      if (value === '.') {
        if (dotIndex !== -1) return;
      } else if (value === '0') {
        if (dotIndex === -1 && refAmount.value === '0') return;
      } else {
        if (refAmount.value === '0') {
          refAmount.value = '';
        }
      }

      refAmount.value = refAmount.value + value;
    };
    return () => <>
      <div class={s.date_amount}>
        <input type="date" value={'2022-05-20'}/>
        <span class={s.amount}>{refAmount.value}</span>
      </div>
      <div class={s.button_wrapper}>
        {buttons.map(item => (
          <button onClick={() => handlePadClick(item)}>{item}</button>
        ))}
      </div>
    </>;
  }
});


export default InputPad;
