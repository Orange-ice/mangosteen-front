import {defineComponent} from 'vue';
import Navbar from './navbar';

const MainLayout = defineComponent({
  setup(props, context) {
    return () => (
      <div>
        <Navbar>{{
          default: () => context.slots.title?.(),
          icon: () => context.slots.icon?.(),
        }}</Navbar>
        {context.slots.default?.()}
      </div>
    );
  }
});


export default MainLayout;