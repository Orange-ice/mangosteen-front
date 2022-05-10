import {defineComponent, PropType} from 'vue';
import s from './overlay.module.scss';
import Icon from '../icon';

const Overlay = defineComponent({
  props:{
    visible: {
      type: Boolean as PropType<boolean>,
    },
    onClose: {
      type: Function as PropType<() => void>,
    }
  },
  setup(props) {
    return () => <div style={{display: props.visible ? 'block': 'none'}}>
      <div class={s.mask} onClick={props.onClose}/>
      <div class={s.overlay}>
        <section>
          <h2>未登录用户</h2>
          <p>点击这里登录</p>
        </section>
        <nav>
          <ul>
            <li>
              <Icon name="diagram"/>
              <span>统计图表</span>
            </li>
            <li>
              <Icon name="export"/>
              <span>导出数据</span>
            </li>
            <li>
              <Icon name="notify"/>
              <span>记账提醒</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>;

  }
});


export default Overlay;