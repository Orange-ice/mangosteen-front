import {defineComponent} from 'vue';
import s from './start.module.scss'
import Button from '../../components/button';
import FloatButton from '../../components/float_button';

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
        <FloatButton/>
      </div>
    )
  }
})


export default Start;