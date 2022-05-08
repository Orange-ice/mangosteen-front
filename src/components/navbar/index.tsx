import {defineComponent} from 'vue';
import s from './navbar.module.scss';

const Navbar = defineComponent({
  setup(props, context) {
    return () => (
      <div class={s.navbar}>
        <span class={s.icon}>{context.slots.icon?.()}</span>
        <span class={s.title}>{context.slots.default?.()}</span>
      </div>
    )
  }
})


export default Navbar;