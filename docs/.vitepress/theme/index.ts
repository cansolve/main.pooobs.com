import BlogTheme from '@sugarat/theme'

// 自定义样式重载
// import './style.scss'

// 自定义主题色
// import './user-theme.css'

import LoginButton from './components/LoginButton.vue';

export default {
    ...BlogTheme,
    enhanceApp({ app }) {
        app.component('LoginButton', LoginButton);
    },
};