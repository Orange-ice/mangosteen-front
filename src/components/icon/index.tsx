import {defineComponent, PropType} from 'vue';
import s from './icon.module.scss';

const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    );
  }
});

export default Icon;