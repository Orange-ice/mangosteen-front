import {defineComponent, PropType} from 'vue';
import {RouterLink} from 'vue-router';
import s from './overlay.module.scss';
import Icon from '../icon';

const Overlay = defineComponent({
  props: {
    visible: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    onClose: {
      type: Function as PropType<() => void>,
    }
  },
  setup(props) {
    return () => <div style={{display: props.visible ? 'block' : 'none'}}>
      <div class={s.mask} onClick={props.onClose}/>
      <div class={s.overlay}>
        <section class={s.user}>
          <h2>未登录用户</h2>
          <p>点击这里登录</p>
        </section>
        <nav>
          <ul class={s.action_list}>
            <li>
              <RouterLink to="/statistics" class={s.action}>
                <Icon name="diagram"/>
                <span>统计图表</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/export" class={s.action}>
                <Icon name="export"/>
                <span>导出数据</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/notify" class={s.action}>
                <Icon name="notify"/>
                <span>记账提醒</span>
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>;

  }
});


export default Overlay;