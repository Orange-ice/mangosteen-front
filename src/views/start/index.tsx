import {defineComponent, ref} from 'vue';
import {RouterLink} from 'vue-router';
import s from './start.module.scss';
import Button from '../../components/button';
import FloatButton from '../../components/floatButton';
import Center from '../../components/center';
import Icon from '../../components/icon';
import Overlay from '../../components/overlay';
import MainLayout from '../../components/mainLayout';

const Start = defineComponent({
  setup() {
    const refOverlayVisible = ref(false);
    const handleClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value;
    };

    const closeMenu = () => {
      refOverlayVisible.value = false;
    };

    return () => (
      <MainLayout class={s.start}>{{
        title: () => '山竹记账',
        icon: () => <Icon name="menu" class={s.nav_icon} onClick={handleClickMenu}/>,
        default: () => <>
          <Center class={s.pig_wrapper}>
            <Icon name="pig" class={s.pig}/>
          </Center>
          <div class={s.button_wrapper}>
            <RouterLink to="/items/create">
              <Button class={s.button}>开始记账</Button>
            </RouterLink>
          </div>
          <RouterLink to="/items/create">
            <FloatButton/>
          </RouterLink>
          <Overlay visible={refOverlayVisible.value} onClose={closeMenu}/>
        </>
      }}</MainLayout>
    );
  }
});


export default Start;
