/**
 * 怪盗基德网页交互脚本
 * 实现图库选项卡切换和引用轮播功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化选项卡功能
    initTabs();
    
    // 初始化引用轮播
    initQuotesCarousel();
});

/**
 * 初始化图库选项卡功能
 * 允许用户在不同类别的图片集之间切换
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 给当前点击的按钮添加active类
            button.classList.add('active');
            
            // 获取对应的内容区域
            const tabId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(`${tabId}-content`);
            
            // 隐藏所有内容区域
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 显示目标内容区域
            targetContent.classList.add('active');
        });
    });
}

/**
 * 初始化引用轮播功能
 * 实现引用的自动轮播和手动切换
 */
function initQuotesCarousel() {
    const quotes = document.querySelectorAll('.quote');
    const prevButton = document.getElementById('prev-quote');
    const nextButton = document.getElementById('next-quote');
    let currentIndex = 0;
    
    // 显示第一个引用
    showQuote(currentIndex);
    
    // 设置自动轮播
    let interval = setInterval(() => {
        nextQuote();
    }, 5000);
    
    // 上一个引用按钮点击事件
    prevButton.addEventListener('click', () => {
        clearInterval(interval); // 清除自动轮播
        prevQuote();
        // 重新开始自动轮播
        interval = setInterval(() => {
            nextQuote();
        }, 5000);
    });
    
    // 下一个引用按钮点击事件
    nextButton.addEventListener('click', () => {
        clearInterval(interval); // 清除自动轮播
        nextQuote();
        // 重新开始自动轮播
        interval = setInterval(() => {
            nextQuote();
        }, 5000);
    });
    
    /**
     * 显示指定索引的引用
     * @param {number} index - 要显示的引用索引
     */
    function showQuote(index) {
        quotes.forEach((quote, i) => {
            if (i === index) {
                quote.classList.add('active');
            } else {
                quote.classList.remove('active');
            }
        });
    }
    
    /**
     * 显示下一个引用
     */
    function nextQuote() {
        currentIndex = (currentIndex + 1) % quotes.length;
        showQuote(currentIndex);
    }
    
    /**
     * 显示上一个引用
     */
    function prevQuote() {
        currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
        showQuote(currentIndex);
    }
}