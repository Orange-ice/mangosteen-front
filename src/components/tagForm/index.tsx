import {defineComponent, onMounted, PropType, reactive, toRaw} from 'vue';
import s from './tagForm.module.scss';
import {Rules, validate} from '../../shared/validate';
import MainLayout from '../mainLayout';
import Icon from '../icon';
import EmojiSelect from '../emojiSelect';
import Button from '../button';

const TagForm = defineComponent({
  props: {
    status: {
      type: String as PropType<'edit' | 'new'>,
      required: true,
    },
    initData: Object as PropType<{ name: string, sign: string }>,
  },
  setup(props, context) {
    const formData = reactive({
      name: '',
      sign: '',
    });
    // 表单数据类型
    type FormData = typeof formData;
    const errors = reactive<{ [k in keyof FormData]?: string[] | undefined }>({});
    const onSubmit = (e: Event) => {
      const rules: Rules<FormData> = [
        {key: 'name', message: '必填', type: 'required'},
        {key: 'name', message: '长度不能超过 4 个字符', type: 'pattern', regex: /^.{1,4}$/},
        {key: 'sign', message: '必填', type: 'required'},
      ];
      const {name, sign} = validate(formData, rules);
      errors.name = name;
      errors.sign = sign;
      console.log(toRaw(errors));
      e.preventDefault();
    };

    onMounted(() => {
      formData.name = props.initData?.name || '';
      formData.sign = props.initData?.sign || '';
    });

    return () => (
      <MainLayout>{{
        title: () => props.status === 'new' ? '新建标签' : '编辑标签',
        icon: () => <Icon name="back"/>,
        default: () => <>
          <form class={s.form} onSubmit={onSubmit}>
            {/* 标签名 */}
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>标签名</span>
                <div class={s.formItem_value}>
                  <input v-model={formData.name} class={[s.formItem, s.input, errors.name && s.error]}/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>{errors.name?.[0]}</span>
                </div>
              </label>
            </div>

            {/* 符号 */}
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>符号 {formData.sign}</span>
                <div class={s.formItem_value}>
                  <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]}
                               error={Boolean(errors.sign)}/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>{errors.sign?.[0]}</span>
                </div>
              </label>
            </div>

            <p class={s.tips}>记账时长按标签即可进行编辑</p>
            <div class={s.formRow}>
              <div class={s.formItem_value}>
                <Button class={[s.formItem, s.button]}>确定</Button>
              </div>
            </div>
          </form>

          {props.status === 'edit' &&
            <div class={s.actions}>
              <Button class={s.remove} level="danger">删除标签</Button>
              <Button class={s.remove} level="danger">删除标签和记账</Button>
            </div>
          }
        </>,
      }}</MainLayout>
    );
  },
});


export default TagForm;
