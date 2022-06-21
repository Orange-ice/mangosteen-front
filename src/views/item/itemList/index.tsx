import {defineComponent, ref} from 'vue';
import MainLayout from '../../../components/mainLayout';
import Icon from '../../../components/icon';
import {Tab, Tabs} from '../../../components/tabs';

const ItemList = defineComponent({
  setup() {
    const refSelected = ref('本月');
    return () => (
      <MainLayout>{
        {
          title: () => '山竹记账',
          icon: () => <Icon name="menu"/>,
          default: () => (
            <Tabs v-model:selected={refSelected.value} alignment="left">
              <Tab name="本月">list1</Tab>
              <Tab name="上个月">list2</Tab>
              <Tab name="今年">list3</Tab>
              <Tab name="自定义时间">list4</Tab>
            </Tabs>
          ),
        }
      }</MainLayout>
    );
  }
});


export default ItemList;
