import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import './stylesheets/App.scss';

const App = defineComponent({
  setup() {
    return () => (
      <div>
        <RouterView />
      </div>
    );
  },
});

export default App;
