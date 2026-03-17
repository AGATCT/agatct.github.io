# Night Theme Settings

本文件记录 `index.html` 中夜晚主题（`[data-theme="dark"]`）的配置，便于后续统一维护和微调。

## 1. 主题变量

位置：`[data-theme="dark"]`（约 `index.html:30`）

- `--bg-primary: #0e1622`
- `--bg-secondary: #182434`
- `--bg-card: rgba(24, 36, 52, 0.56)`
- `--text-primary: #f1f5f9`
- `--text-secondary: #9fb0c4`
- `--accent: #7fb2ff`
- `--accent-hover: #5f9eff`
- `--border: rgba(165, 184, 207, 0.16)`
- `--shadow: rgba(2, 8, 20, 0.42)`
- `--sidebar-bg: rgba(12, 20, 30, 0.72)`

## 2. 夜空背景渐变

位置：`[data-theme="dark"] body`（约 `index.html:58`）

- 背景渐变：
  - `linear-gradient(180deg, #060b14 0%, #0e1826 45%, #17283a 100%)`
- 设计意图：
  - 顶部最暗，向下略微提亮，保持夜空层次感但不过亮。

## 3. 暗色背景光晕

位置：`[data-theme="dark"] body::before`（约 `index.html:78`）

- 三层径向渐变：
  - `radial-gradient(ellipse at 18% 12%, rgba(138, 173, 214, 0.08) 0%, transparent 52%)`
  - `radial-gradient(ellipse at 82% 28%, rgba(97, 148, 204, 0.06) 0%, transparent 56%)`
  - `radial-gradient(ellipse at 50% 100%, rgba(84, 138, 194, 0.1) 0%, transparent 70%)`
- 设计意图：
  - 提升通透感，避免深色“发闷”。

## 4. 星空点缀

### 4.1 固定微弱星点层

位置：`.sky-effects::before`（约 `index.html:321`）

- 使用 `box-shadow` 批量绘制分散小星点。
- 透明度控制在 `0.12 ~ 0.22`，避免花哨。

### 4.2 闪烁星层

位置：`.twinkle-star` 与 `.twinkle-star.s1~s10`（约 `index.html:342`）

- 星点数量：10 颗（含 2 颗 `big`）
- 闪烁动画：`starBlink 4.6s ease-in-out infinite`
- 每颗星使用不同 `animation-delay`，减少同步闪烁导致的人工感。

位置：`@keyframes starBlink`（约 `index.html:396`）

- 关键帧：
  - `0%, 100% { opacity: 0.18; }`
  - `45% { opacity: 0.5; }`
  - `55% { opacity: 0.26; }`

## 5. 流星设置

位置：`.shooting-star`、`.shooting-star.star-1`、`.shooting-star.star-2`（约 `index.html:370`）

- 基础样式：
  - `width: 170px`（第二条为 `145px`）
  - 尾巴渐变：
    - `linear-gradient(90deg, rgba(220, 232, 246, 0) 0%, rgba(220, 232, 246, 0.32) 62%, rgba(244, 248, 253, 0.95) 100%)`
  - 亮头在前、尾部在后，保证“移动方向 = 流星头部方向”。

- 第 1 条流星：
  - 角度：`rotate(18deg)`
  - 动画：`shootOne 11s cubic-bezier(0.22, 0.61, 0.36, 1) infinite`
  - 位移终点：`translate3d(148vw, 44vh, 0)`

- 第 2 条流星：
  - 角度：`rotate(14deg)`
  - 动画：`shootTwo 14s cubic-bezier(0.22, 0.61, 0.36, 1) infinite`
  - 延迟：`3.2s`
  - 位移终点：`translate3d(138vw, 34vh, 0)`

## 6. DOM 结构

位置：`index.html:1020`

- 夜空容器：
  - `<div class="sky-effects">`
- 子元素：
  - 10 个 `twinkle-star`
  - 2 个 `shooting-star`（`star-1` / `star-2`）

## 7. 推荐调参入口

如果后续想继续微调，优先改这几个参数：

1. 通透感：
   - `--bg-card` alpha
   - `--sidebar-bg` alpha
2. 星空强度：
   - `.twinkle-star` 的 `opacity` 和 `box-shadow`
   - `starBlink` 的峰值透明度（当前 `0.5`）
3. 流星节奏：
   - `shootOne/shootTwo` 动画总时长与关键帧出现区间（当前在后段出现，较克制）
