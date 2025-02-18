document.addEventListener('DOMContentLoaded', function() {
    // 获取返回顶部按钮
    const backToTopButton = document.getElementById('back-to-top');

    // 监听页面滚动事件
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // 点击按钮时平滑滚动回到页面顶部
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 返回按钮功能
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
        window.history.back();
    });
});
