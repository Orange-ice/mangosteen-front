import {defineComponent} from 'vue';
import {RouterView} from 'vue-router';

const Item = defineComponent({
  setup() {
    return () => (
      <RouterView/>
    );
  }
});


export default Item;