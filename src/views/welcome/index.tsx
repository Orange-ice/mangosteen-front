import {defineComponent, ref, watchEffect} from 'vue';
import {useRouter} from 'vue-router';
import s from './welcome.module.scss';
import useSwipe from '../../hooks/useSwipe';

const contentList = [
  {text: '会挣钱\n还要会省钱', icon: 'pig'},
  {text: '每日提醒\n不会遗漏每一笔账单', icon: 'clock'},
  {text: '数据可视化\n收支一目了然', icon: 'chart'},
  {text: '云备份\n再也不怕数据丢失', icon: 'cloud'}
];

const Welcome = defineComponent({
  setup() {
    const refStep = ref(0);
    const refMain = ref<HTMLElement>();
    const router = useRouter();
    const {refDirection, refSwiping} = useSwipe(refMain, {
      beforeStart: (e) => e.preventDefault()
    });

    watchEffect(() => {
      if (!refSwiping.value) {
        if (refDirection.value === 'left' && refStep.value < 3) {
          refStep.value += 1;
        } else if (refDirection.value === 'right' && refStep.value > 0) {
          refStep.value -= 1;
        }
      }
    });

    const jumpStart = () => {
      router.push('/start');
    };
    const nextStep = () => {
      if (refStep.value < 3) {
        refStep.value += 1;
        return;
      }
      jumpStart();
    };
    return () => (
      <div class={s.wrapper}>
        <header class={s.header}>
          <svg>
            <use xlinkHref="#logo"/>
          </svg>
          <h2>山竹记账</h2>
        </header>
        <main class={s.main} style={{transform: `translateX(-${refStep.value}00%)`}} ref={refMain}>

          {contentList.map(item => (
            <div key={item.icon} class={s.content}>
              <svg>
                <use xlinkHref={`#${item.icon}`}/>
              </svg>
              {/*  p{ white-space: pre-line; }  可以使得 html中 \n 显示为换行符 */}
              <p style={{whiteSpace: 'pre-line'}}>{item.text}</p>
            </div>
          ))}

        </main>
        <footer class={s.footer}>
          {/* 假按钮，为了 css 布局占位 */}
          <button class={s.fake}>跳过</button>
          <button onClick={nextStep}>{refStep.value === 3 ? '开启应用' : '下一页'}</button>
          <button class={refStep.value === 3 ? s.fake : ''} onClick={jumpStart}>跳过</button>
        </footer>
      </div>
    );
  },
});

export default Welcome;
