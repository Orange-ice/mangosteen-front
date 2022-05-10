import {defineComponent, PropType} from 'vue';
import s from './icon.module.scss';

const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    },
    onClick: {
      type: Function as PropType<() => void>,
    }
  },
  setup(props) {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    );
  }
});

export default Icon;