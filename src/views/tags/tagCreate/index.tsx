import {defineComponent, reactive} from 'vue';
import MainLayout from '../../../components/mainLayout';
import Icon from '../../../components/icon';
import s from './tagCreate.module.scss';
import Button from '../../../components/button';
import EmojiSelect from '../../../components/emojiSelect';

const TagCreate = defineComponent({
  setup(props, context) {
    const formData = reactive({
      name: '',
      sign: 'x',
    });
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name="back"/>,
        default: () => (
          <form class={s.form}>
            {/* 标签名 */}
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>标签名</span>
                <div class={s.formItem_value}>
                  <input v-model={formData.name} class={[s.formItem, s.input, s.error]}/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>

            {/* 符号 */}
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>符号 {formData.sign}</span>
                <div class={s.formItem_value}>
                  <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]}/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
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
        )
      }}</MainLayout>
    )
  }
})

export default TagCreate;
