import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import s from './welcome.module.scss';
import logo from '../../assets/welcome/logo.svg';
import pig from '../../assets/welcome/pig.svg';
import clock from '../../assets/welcome/clock.svg';
import chart from '../../assets/welcome/chart.svg';
import cloud from '../../assets/welcome/cloud.svg';

const contentList =[
  {text: '会挣钱\n还要会省钱', img: pig},
  {text: '每日提醒\n不会遗漏每一笔账单', img: clock},
  {text: '数据可视化\n收支一目了然', img: chart},
  {text: '云备份\n再也不怕数据丢失', img: cloud}
]

const Welcome = defineComponent({
    setup() {
      const refStep = ref(0);
      const router = useRouter();
      const jumpStart = () => {
        router.push('/start');
      }
      const nextStep = () => {
        if(refStep.value < 3 ) {
          refStep.value += 1;
          return;
        }
        jumpStart();
      }
        return () => (
            <div class={s.wrapper}>
                <header class={s.header}>
                    <img src={logo} alt="logo"/>
                    <h2>山竹记账</h2>
                </header>
                <main class={s.main} style={{transform: `translateX(-${refStep.value}00%)`}}>

                  {contentList.map(item => (
                    <div key={item.img} class={s.content}>
                      <img src={item.img} alt=""/>
                      {/*  p{ white-space: pre-line; }  可以使得 html中 \n 显示为换行符 */}
                      <p style={{whiteSpace: 'pre-line'}}>{item.text}</p>
                    </div>
                  ))}

                </main>
                <footer class={s.footer}>
                    {/* 假按钮，为了 css 布局占位 */}
                    <button class={s.fake}>跳过</button>
                    <button onClick={nextStep}>{refStep.value === 3 ? '开启应用': '下一页'}</button>
                    <button class={refStep.value === 3 ? s.fake: ''} onClick={jumpStart}>跳过</button>
                </footer>
            </div>
        );
    },
});

export default Welcome;
