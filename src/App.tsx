import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import './stylesheets/App.scss';

const App = defineComponent({
  setup() {
    return () => (
      <div style={{height: '100vh'}}>
        <RouterView />
      </div>
    );
  },
});

export default App;
