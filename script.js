// 添加社交按钮的交互效果
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 为登录卡片添加悬停效果
const loginCard = document.querySelector('.login-card');
if (loginCard) {
    loginCard.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
    });
    
    loginCard.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    });
}

// 添加标签切换功能
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // 移除所有标签的激活状态
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        
        // 激活当前标签
        this.classList.add('active');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// 为3D插画添加更丰富的动画效果
const cubes = document.querySelectorAll('.cube');
cubes.forEach((cube, index) => {
    // 添加随机的初始旋转角度
    const randomX = Math.random() * 360;
    const randomY = Math.random() * 360;
    cube.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;
    
    // 为每个立方体添加不同的动画速度
    const duration = 10 + index * 2;
    cube.style.animation = `rotate ${duration}s infinite linear`;
});

// 平滑滚动效果（如果需要）
function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 响应式调整
function adjustLayout() {
    const main = document.querySelector('main');
    const width = window.innerWidth;
    
    if (width < 768) {
        main.style.flexDirection = 'column';
    } else {
        main.style.flexDirection = 'row';
    }
}

window.addEventListener('resize', adjustLayout);

// 初始化布局
adjustLayout();

// 为页脚链接添加交互效果
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#ff4d4f';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.color = '#666';
    });
});