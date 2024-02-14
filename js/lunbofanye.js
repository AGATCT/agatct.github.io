
// 获取图片元素和圆点元素
const slides = document.querySelectorAll('.banner-img-container img');
const dots = document.querySelectorAll('input[name="radio-set"]');

// 获取左右切换按钮元素
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// 当前显示图片的索引
let currentIndex = 0;

// 向前翻页函数
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
}

// 向后翻页函数
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
}

// 更新轮播图显示状态
function updateSlide() {
    // 隐藏所有图片和圆点
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.checked = false);

    // 显示当前索引的图片和圆点
    slides[currentIndex].style.display = 'block';
    dots[currentIndex].checked = true;
}

// 添加左右切换按钮点击事件监听
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// 初始化轮播图状态
updateSlide();
