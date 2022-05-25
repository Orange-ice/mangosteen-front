import {defineComponent} from 'vue';
import s from './floatButton.module.scss'
import Icon from '../icon';

const FloatButton = defineComponent({
  setup() {
    return() => (
      <div class={s.wrapper}>
        <Icon name="add"  class={s.icon}/>
      </div>
    )
  }
})


export default FloatButton;
