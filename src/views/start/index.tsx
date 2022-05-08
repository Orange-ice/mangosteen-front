import {defineComponent} from 'vue';
import s from './start.module.scss'
import Button from '../../components/button';
import FloatButton from '../../components/float_button';
import Center from '../../components/center';
import Icon from '../../components/icon';

const Start = defineComponent({
  setup() {
    const handleClick = () => {
      console.log('click');
    }

    return () => (
      <div class={s.start}>
        <nav>menu</nav>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={handleClick}>开始记账</Button>
        </div>
        <FloatButton/>
      </div>
    )
  }
})


export default Start;