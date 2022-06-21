import {defineComponent, PropType} from 'vue';
import s from './button.module.scss';

const Button = defineComponent({
  props: {
    onClick: Function as PropType<(event: MouseEvent) => void>,
    level: {
      type: String as PropType<'normal' | 'danger'>,
      default: 'normal',
    },
  },
  setup(props, context) {
    return () => (
      <button class={[s.button, s[props.level]]}>
        {context.slots.default?.()}
      </button>
    );
  },
});

export default Button;
