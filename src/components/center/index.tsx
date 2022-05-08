import {defineComponent, PropType} from 'vue';
import s from './center.module.scss';

const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<'row' | 'column'>,
      default: 'row',
    }
  },
  setup(props,context) {
    return () => (
      <div class={[s.wrapper, props.direction]}>
        {context.slots.default?.()}
      </div>
    );
  }
});


export default Center;