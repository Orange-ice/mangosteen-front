import {defineComponent} from 'vue';
import TagForm from '../../../components/tagForm';

const TagCreate = defineComponent({
  setup(props, context) {
    return () => (
      <TagForm status="new"/>
    );
  },
});

export default TagCreate;
