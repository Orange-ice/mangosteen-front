import {defineComponent} from 'vue';
import {RouterView} from 'vue-router';

const Tags = defineComponent({
  setup() {
    return () =>  (
      <RouterView/>
    )
  }
})

export default Tags;
