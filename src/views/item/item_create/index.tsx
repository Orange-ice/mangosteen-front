import {defineComponent} from 'vue';
import MainLayout from '../../../components/mainLayout';
import Icon from '../../../components/icon';
import {useRouter} from 'vue-router';

const ItemCreate = defineComponent({
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    return () => (
      <MainLayout>{{
        title: () => '记一笔',
        icon: () => <Icon name="back" onClick={goBack}/>,
        default: () => <>
          <div>记一笔</div>
        </>,
      }}</MainLayout>
    );
  }
});


export default ItemCreate;