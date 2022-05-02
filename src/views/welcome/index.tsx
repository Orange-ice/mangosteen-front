import { defineComponent } from 'vue';
import s from './welcome.module.scss';
import logo from '../../assets/welcome/logo.svg';
import pig from '../../assets/welcome/pig.svg';

const Welcome = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <header class={s.header}>
                    <img src={logo} alt="logo"/>
                    <h2>山竹记账</h2>
                </header>
                <main class={s.main}>
                    <div class={s.content}>
                        <img src={pig} alt="存钱罐配图"/>
                        <p>会挣钱<br/>还要会省钱</p>
                    </div>
                </main>
                <footer class={s.footer}>
                    {/* 假按钮，为了 css 布局占位 */}
                    <button class={s.fake}>跳过</button>
                    <button>下一页</button>
                    <button>跳过</button>
                </footer>
            </div>
        );
    },
});

export default Welcome;
