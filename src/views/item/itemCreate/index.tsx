import {defineComponent, ref} from 'vue';
import MainLayout from '../../../components/mainLayout';
import Icon from '../../../components/icon';
import {useRouter} from 'vue-router';
import {Tabs, Tab} from '../../../components/tabs';
import s from './itemCreate.module.scss';
import InputPad from './inputPad';

const ItemCreate = defineComponent({
  setup() {
    const refKind = ref('支出');
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    return () => (
      <MainLayout>{{
        title: () => '记一笔',
        icon: () => <Icon name="back" onClick={goBack}/>,
        default: () => <>
          <Tabs v-model:selected={refKind.value}>
            <Tab name="支出">icon list 11</Tab>
            <Tab name="收入">icon list 22</Tab>
          </Tabs>
          <div class={s.pad_wrapper}>
            <InputPad/>
          </div>
        </>,
      }}</MainLayout>
    );
  }
});


export default ItemCreate;
