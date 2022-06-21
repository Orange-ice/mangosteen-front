import {defineComponent} from 'vue';
import TagForm from '../../../components/tagForm';

const TagEdit = defineComponent({
  setup() {
    return () => (
      <TagForm status="edit" initData={{name: '123', sign: ''}}/>
    )
  }
})

export default TagEdit;
