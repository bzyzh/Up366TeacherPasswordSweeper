// ==UserScript==
// @name         自动移除天学网的强制更改密码请求
// @author       nuym
// @version      1.0
// @description  自动移除 teacher.up366.cn 页面上的初始密码修改提示框和遮罩层
// @match        *://*.teacher.up366.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 定义要移除的类名数组
    const targetClassNames = [
        'el-dialog el-dialog--center u3-modal-box__wrapper',
        'v-modal',
        'el-dialog__wrapper',
        'security-modal'
    ];

    // 移除匹配的元素
    function removeTargetElements() {
        targetClassNames.forEach(className => {
            document.querySelectorAll(`.${className.split(' ').join('.')}`).forEach(el => el.remove());
        });
    }

    // 初始移除
    removeTargetElements();

    // 使用 MutationObserver 监听 DOM 变化
    const observer = new MutationObserver(() => {
        removeTargetElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
