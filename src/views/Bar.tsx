import { defineComponent, ref } from 'vue';

const Bar = defineComponent({
  setup() {
    const count = ref(0);
    const onClick = () => {
      count.value++;
    };
    return () => (
      <div>
        <h1>Bar</h1>
        <div>{count.value}</div>
        <button onClick={onClick}>+1</button>
      </div>
    );
  },
});

export default Bar;
