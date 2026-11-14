# CraftSpec

> **頂級 AI 設計需求架構師與規格最佳化引擎**  
> 告別千篇一律的「AI 廉價模板感（Slop）」。透過「Ask Once」四大維度提問、硬性底線防禦（The Floor）、行動端防禦與風格抽卡盲盒，將模糊的設計需求重構為極致專業、抗模板化且可直接執行的 AI 設計規格書與 Prompt。

---

## 核心亮點

- 🛡️ **不可逾越的硬性防線（The Floor）**：嚴禁無意義的紫色漸變、嚴禁卡片裡面包卡片、嚴禁濫用動畫（只允許 `transform` 與 `opacity`）、嚴禁 AI 捏造虛假數據與評價。
- 🎯 **精準提問（Ask Once）**：拒絕無休止的追問。只問一次，聚焦四個關鍵維度：**素材 (Material)**、**受眾 (Audience)**、**核心行動 (Use)** 與 **風格極端值 (Tone)**。
- 📱 **行動端與觸控防禦（Mobile Defense）**：強制 44×44px 最小觸控熱區、`clamp()` 響應式字級防爆（避免手機端標題過長折行）、手機端表格自動降級卡片，絕無橫向溢出。
- 🎲 **風格盲盒與靈感抽卡（Style Shuffle）**：內建 6 組調校完成的小眾高階美學套件（瑞士雜誌風、暗黑戰術風、靜謐奢華風、日系極簡紙感風、工業粗獷機能風、賽博幾何藍圖風）。
- 🔄 **現有醜網頁洗白重構（Redesign / Unslop）**：支援貼上舊代碼或截圖，自動診斷 Floor 違規病灶，產出保留業務邏輯、洗白視覺表現的無痛遷移任務書。
- 🔌 **下游目標 AI 工具適配器（Target Model Adaptor）**：產出完美契合 **v0 / Bolt**、**Cursor / Devin / Windsurf** 或 **Claude Artifacts** 的專屬提示詞。

---

## 支援的 IDE 與 AI Agent 清單

CraftSpec 具備跨平臺、多 IDE 的開箱即用架構：

| 平台 / Agent | 設定與檔案位置 | 啟用方式 |
| :--- | :--- | :--- |
| **Devin CLI / Desktop** | `.devin-plugin/plugin.json`, `skills/craftspec/SKILL.md` | `devin plugins install owner/craftspec` 或輸入 `/craftspec` |
| **Claude Code** | `.claude-plugin/plugin.json`, `CLAUDE.md` | 自動加載或使用 `/craftspec` |
| **Cursor IDE** | `.cursor/rules/craftspec.mdc`, `.cursorrules` | 自動於程式碼編輯與對話中生效 |
| **Windsurf / Cascade** | `.windsurfrules`, `AGENTS.md` | 自動載入為專案始終開啟規則 |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Copilot 生成程式碼時自動依循 The Floor 規範 |
| **通用 Agent (skills.sh / OpenCode)** | `.agents/skills/craftspec/SKILL.md` | 遵循開放 Agent Plugins 1.0.0 標準 |

---

## 專案結構

```text
craftspec/
├── .agents/skills/craftspec/ # 通用 Agent 規範
├── .claude-plugin/           # Claude Code 插件清單
├── .cursor/rules/            # Cursor MDC 規則
├── .devin-plugin/            # Devin Plugin 清單
├── .github/                  # GitHub Copilot 指令
├── skills/craftspec/         # 核心 Skill 定義 (SKILL.md)
├── .cursorrules              # 根目錄 Cursor 規則
├── .windsurfrules            # 根目錄 Windsurf 規則
├── AGENTS.md                 # 全主流 Agent 始終開啟規則
├── CLAUDE.md                 # Claude 專用指南
├── .gitignore                # 排除敏感檔案
├── vercel.json               # 網域與部署設定
└── README.md                 # 專案說明文件
```

---

## 安裝與使用方式

### 方式 A：使用 npx 極速體驗（零安裝，支援所有專案）

在您的前端專案根目錄執行：

```bash
# 1. 一鍵將 CraftSpec 設計規範注入當前專案（自動產生 .cursorrules, .windsurfrules, AGENTS.md, CLAUDE.md 等）
npx craftspec init

# 2. 直接在終端機優化設計需求
npx craftspec "我想做一個暗黑極簡的手錶電商網站"

# 3. 隨機風格抽卡盲盒
npx craftspec shuffle
```

---

### 方式 B：作為 Devin / Agent Plugin 安裝

在任何支援 Devin / Agent Plugins 的終端機或 IDE 中執行：

```bash
# 從 GitHub 遠端安裝
devin plugins install makeskills/craftspec
```

若要在本機進行開發與熱更新：
```bash
# 本地軟連結安裝（修改即時生效）
devin plugins install --local ./
```

---

### 方式 C：在 IDE / 對話框中呼叫

安裝後，在對話框輸入 `/` 即可自動跳出 `/craftspec` 選單：

#### 1. 全新設計需求
```text
/craftspec 想做一個現代化形象官網
```
AI 會先跳出「Ask Once」四大維度卡片供您選擇，確認後輸出包含專屬記憶點（Signature）、Design Tokens 與可直接交給 AI 的 Prompt。

#### 2. 靈感抽卡盲盒
```text
/craftspec 隨機抽卡
```
AI 會自動從內建的 6 組高階美學庫中抽取一套獨特方案，打破審美疲勞。

#### 3. 現有頁面洗白重構
```text
/craftspec 改版現有首頁，去除 AI 模板感 [附上代碼或描述]
```
AI 會自動執行 Floor 違規診斷，並產出重構遷移任務書。

---

## 授權條款

MIT License.
