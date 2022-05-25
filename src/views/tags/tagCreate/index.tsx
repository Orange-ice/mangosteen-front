import {defineComponent} from 'vue';
import MainLayout from '../../../components/mainLayout';
import Icon from '../../../components/icon';

const TagCreate = defineComponent({
  setup(props, context) {
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name="back"/>,
        default: () => (
          <form>
            <div>
              <label>
                <span>标签名</span>
                <input type="text"/>
              </label>
            </div>

            <div>
              <label>
                <span>符号</span>
                <div>
                  <nav>
                    <span>表情</span>
                    <span>手势</span>
                  </nav>
                  <ol></ol>
                </div>
              </label>
            </div>

            <div>
              <p>记账时长按标签即可进行编辑</p>
            </div>
            <div>
              <button>确定</button>
            </div>
          </form>
        )
      }}</MainLayout>
    )
  }
})

export default TagCreate;
