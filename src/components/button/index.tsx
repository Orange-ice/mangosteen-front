import {defineComponent} from 'vue';
import s from './button.module.scss'

interface Props{
  onClick?: (event: MouseEvent) => void
}

const Button = defineComponent<Props>({
  setup(props,context){
    return () => (
      <button class={s.button}>
        {context.slots.default?.()}
      </button>
    )
  }
})

export default Button;