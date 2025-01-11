document.addEventListener('DOMContentLoaded', function () {
    // 获取所有的 radio 按钮
    let radios = document.querySelectorAll('input[name="radio-set"]');

    // 获取当前选中的 radio 的索引
    function getCurrentIndex() {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return i;
            }
        }
        return 0; // 默认返回第一个
    }

    // 显示上一张
    function prevSlide() {
        let currentIndex = getCurrentIndex();
        // 如果当前是第一个，跳转到最后一个
        if (currentIndex === 0) {
            radios[radios.length - 1].checked = true;
        } else {
            radios[currentIndex - 1].checked = true;
        }
    }

    // 显示下一张
    function nextSlide() {
        let currentIndex = getCurrentIndex();
        // 如果当前是最后一张，跳转到第一个
        if (currentIndex === radios.length - 1) {
            radios[0].checked = true;
        } else {
            radios[currentIndex + 1].checked = true;
        }
    }

    // 绑定事件：点击左按钮
    const prevBtn = document.querySelector('.prev-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // 绑定事件：点击右按钮
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    // 绑定事件：点击圆点切换
    radios.forEach((radio, index) => {
        radio.addEventListener('click', function () {
            // 点击圆点时，设置对应的 radio 按钮为选中状态
            radios[index].checked = true;
        });
    });
});
