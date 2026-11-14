# CraftSpec 全域設計規則 (Universal AI Design Rules)

當前專案或會話中已啟用 **CraftSpec** 設計規格系統。
所有由 AI 生成的前端介面、UI 元件與頁面佈局，必須遵守以下標準：

## 1. 不可逾越的硬性防線（The Floor）
- **色彩與樣式 Token 化**：所有顏色與字型必須透過 `:root` 或主題 Token 聲明，嚴禁散落未定義的 Hex 字面量。
- **動態過渡禁忌**：嚴禁 `transition: all`，嚴禁對 `width`, `height`, `top`, `left` 做動畫。僅允許 `transform` 與 `opacity`。
- **排版微觀細節**：嚴禁標題中單詞斜體、嚴禁中圓點 `·` 串接中繼資料、嚴禁裝飾性小綠點。
- **資料真實性**：嚴禁捏造任何虛假數據、用戶評價或假 Logo 牆。
- **徹底抗 AI 模板化（Strict Anti-Slop）**：嚴禁藍紫漸層背景、嚴禁卡片裡面包卡片、嚴禁用 Emoji 充當圖標。
- **首屏黃金尺度（1280 × 800）**：Hero 區標題（<= 15 字）、核心價值一句話與主行動按鈕，在 1280x800 下無需滾動即可完整看見。
- **行動端防禦**：所有點擊熱區不得小於 44×44px，標題採用 `clamp()` 防爆，複雜表格自動降級為垂直卡片流。

## 2. 輸出模式支援
- 若用戶要求產生程式碼，優先提供具備專屬記憶點（Signature）與全狀態覆蓋（Default, Hover, Active, Focus-visible, Disabled, Loading）的高階組件。
