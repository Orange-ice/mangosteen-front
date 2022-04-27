import { defineComponent } from 'vue';
import { RouterView, RouterLink } from 'vue-router';

const App = defineComponent({
  setup() {
    return () => (
      <div>
        <RouterLink to="/">Go to Home</RouterLink>
        <br />
        <RouterLink to="/about">Go to About</RouterLink>
        <RouterView />
      </div>
    );
  },
});

export default App;
