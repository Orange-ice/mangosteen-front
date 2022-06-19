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

    const refExpenseTags = ref([
      {id: 1, name: '餐饮', sign: '$', category: 'expense'},
      {id: 2, name: '交通', sign: '$', category: 'expense'},
      {id: 3, name: '娱乐', sign: '$', category: 'expense'},
      {id: 4, name: '购物', sign: '$', category: 'expense'},
    ]);
    const refIncomeTags = ref([
      {id: 1, name: '工资', sign: '$', category: 'income'},
      {id: 2, name: '奖金', sign: '$', category: 'income'},
      {id: 3, name: '兼职', sign: '$', category: 'income'},
      {id: 4, name: '其他', sign: '$', category: 'income'},
      {id: 1, name: '工资', sign: '$', category: 'income'},
      {id: 2, name: '奖金', sign: '$', category: 'income'},
      {id: 3, name: '兼职', sign: '$', category: 'income'},
      {id: 4, name: '其他', sign: '$', category: 'income'},
      {id: 1, name: '工资', sign: '$', category: 'income'},
      {id: 2, name: '奖金', sign: '$', category: 'income'},
      {id: 3, name: '兼职', sign: '$', category: 'income'},
      {id: 4, name: '其他', sign: '$', category: 'income'},
      {id: 1, name: '工资', sign: '$', category: 'income'},
      {id: 2, name: '奖金', sign: '$', category: 'income'},
      {id: 3, name: '兼职', sign: '$', category: 'income'},
      {id: 4, name: '其他', sign: '$', category: 'income'},
      {id: 1, name: '工资', sign: '$', category: 'income'},
      {id: 2, name: '奖金', sign: '$', category: 'income'},
      {id: 3, name: '兼职', sign: '$', category: 'income'},
      {id: 4, name: '其他', sign: '$', category: 'income'},
      {id: 1, name: '工资', sign: '$', category: 'income'},
      {id: 2, name: '奖金', sign: '$', category: 'income'},
      {id: 3, name: '兼职', sign: '$', category: 'income'},
      {id: 4, name: '其他', sign: '$', category: 'income'},
      {id: 1, name: '工资', sign: '$', category: 'income'},
      {id: 2, name: '奖金', sign: '$', category: 'income'},
      {id: 3, name: '兼职', sign: '$', category: 'income'},
      {id: 4, name: '其他', sign: '$', category: 'income'},
      {id: 1, name: '工资', sign: '$', category: 'income'},
      {id: 2, name: '奖金', sign: '$', category: 'income'},
      {id: 3, name: '兼职', sign: '$', category: 'income'},
      {id: 4, name: '其他', sign: '$', category: 'income'},
    ]);

    const goBack = () => {
      router.back();
    };
    const ADDITEM = (
      <div class={s.tag}>
        <div class={s.sign}>
          <Icon name="add" class={s.createTag}/>
        </div>
        <div class={s.name}>新增</div>
      </div>
    );

    // 渲染标签
    const renderTag = (tags: typeof refExpenseTags) => <>
      {ADDITEM}
      {tags.value.map(tag => (
        <div class={[s.tag, s.selected]}>
          <div class={s.sign}>{tag.sign}</div>
          <div class={s.name}>{tag.name}</div>
        </div>
      ))}
    </>;

    return () => (
      <MainLayout>{{
        title: () => '记一笔',
        icon: () => <Icon name="back" onClick={goBack}/>,
        default: () => <>
          <div class={s.wrapper}>
            <Tabs v-model:selected={refKind.value} class={s.tabs}>
              <Tab name="支出" class={s.tags_wrapper}>
                {renderTag(refExpenseTags)}
              </Tab>
              <Tab name="收入" class={s.tags_wrapper}>
                {renderTag(refIncomeTags)}
              </Tab>
            </Tabs>
            <div class={s.pad_wrapper}>
              <InputPad/>
            </div>
          </div>
        </>,
      }}</MainLayout>
    );
  }
});


export default ItemCreate;
