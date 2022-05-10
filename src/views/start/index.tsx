import {defineComponent, ref} from 'vue';
import s from './start.module.scss'
import Button from '../../components/button';
import FloatButton from '../../components/float_button';
import Center from '../../components/center';
import Icon from '../../components/icon';
import Navbar from '../../components/navbar';
import Overlay from '../../components/overlay';

const Start = defineComponent({
  setup() {
    const refOverlayVisible = ref(false);
    const handleClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value;
    }

    const closeMenu = () => {
      refOverlayVisible.value = false;
    }

    return () => (
      <div class={s.start}>
        <Navbar>
          {{
            default: () => '山竹记账',
            icon: () =>  <Icon name="menu" class={s.nav_icon} onClick={handleClickMenu} />,
          }}
        </Navbar>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button}>开始记账</Button>
        </div>
        <FloatButton/>
        <Overlay visible={refOverlayVisible.value} onClose={closeMenu}/>
      </div>
    )
  }
})


export default Start;