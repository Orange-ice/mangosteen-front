import { defineComponent } from 'vue';

const Welcome = defineComponent({
    setup() {
        return () => (
            <div>
                <p>
                    welcome!
                </p>
            </div>
        );
    },
});

export default Welcome;
