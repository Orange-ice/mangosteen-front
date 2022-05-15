import {defineComponent, PropType} from 'vue';
import s from './tabs.module.scss';

const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
    }
  },
  setup(props, context) {
    return () => {
      const tabs = context.slots.default?.();
      if (!tabs) {return null;}

      tabs.forEach(item => {
        if (item.type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> components as children');
        }
      });

      return (
        <div class={s.tabs}>
          <ol class={s.tabs_nav}>
            {tabs.map(item => (
              <li
                class={item.props?.name === props.selected ? s.selected : ''}
                onClick={() => context.emit('update:selected', item.props?.name)}
              >
                {item.props?.name}
              </li>
            ))}
          </ol>
          <div class={s.tabs_content}>
            {tabs.find(item => item.props?.name === props.selected)}
          </div>
        </div>
      );
    };


  }
});

const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup(props, context) {
    return () => (
      <div>{context.slots.default?.()}</div>
    );
  }
});


export {Tabs, Tab};