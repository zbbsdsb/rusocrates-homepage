// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 滚动时添加动画效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('.feature-item, .framework-content, .hero-content, .architecture-diagram, .asi-content, .intro-content');


    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        observer.observe(element);
    });

    // 下载按钮点击效果
    const downloadButtons = document.querySelectorAll('.download-button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 添加点击动画
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 100);
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 300);
            // 可以添加点击统计或其他逻辑
            console.log('Download button clicked:', this.textContent);
        });
    });

    // 框架链接点击效果
    const frameworkLink = document.querySelector('.framework-link');
    if (frameworkLink) {
        frameworkLink.addEventListener('click', function() {
            // 添加点击动画
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 100);
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 300);
            console.log('ASI-Evolve link clicked');
        });
    }

    // 响应式导航菜单（如果需要）
    function handleResize() {
        const headerContent = document.querySelector('.header-content');
        if (window.innerWidth < 768) {
            // 移动设备处理
            headerContent.classList.add('mobile');
        } else {
            headerContent.classList.remove('mobile');
        }
    }

    // 初始调用
    handleResize();
    // 窗口大小改变时调用
    window.addEventListener('resize', handleResize);

    // 添加鼠标跟随效果
    const createMouseFollower = () => {
        const follower = document.createElement('div');
        follower.classList.add('mouse-follower');
        document.body.appendChild(follower);

        document.addEventListener('mousemove', (e) => {
            follower.style.left = `${e.clientX}px`;
            follower.style.top = `${e.clientY}px`;
        });

        // 为可点击元素添加交互效果
        const interactiveElements = document.querySelectorAll('a, button');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                follower.classList.add('active');
            });
            element.addEventListener('mouseleave', () => {
                follower.classList.remove('active');
            });
        });
    };

    // 初始化鼠标跟随效果
    createMouseFollower();

    // 代码片段标签页切换
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有标签页的活动状态
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // 添加当前标签页的活动状态
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

// 页面滚动时的头部效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        header.style.padding = '15px 0';
    } else {
        header.style.boxShadow = '0 4px 6px -4px rgba(0, 0, 0, 0.1)';
        header.style.padding = '20px 0';
    }

    // 滚动进度条
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.querySelector('.progress-bar');
    if (!progressBar) {
        const newProgressBar = document.createElement('div');
        newProgressBar.classList.add('progress-bar');
        document.body.appendChild(newProgressBar);
    } else {
        progressBar.style.width = scrolled + '%';
    }
});