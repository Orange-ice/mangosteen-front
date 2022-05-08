import {defineComponent} from 'vue';
import s from './start.module.scss'
import Button from '../../components/button';

const Start = defineComponent({
  setup() {
    const handleClick = () => {
      console.log('click');
    }

    return () => (
      <div>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={handleClick}>开始记账</Button>
        </div>
      </div>
    )
  }
})


export default Start;