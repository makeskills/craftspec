#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgRoot = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const command = args[0];

if (!command || command === '--help' || command === '-h') {
  console.log(`
\x1b[1m\x1b[36mCraftSpec\x1b[0m - 頂級 AI 設計需求架構師與規格最佳化引擎

\x1b[1m使用方式:\x1b[0m
  npx craftspec init                 在當前專案中一鍵注入 CraftSpec 設計規範（支援 Cursor, Windsurf, Claude, Copilot）
  npx craftspec "<設計需求描述>"      直接在命令列中將粗略需求優化為結構化 AI 設計規格與 Prompt
  npx craftspec --help               顯示本說明資訊
  npx craftspec --version            顯示版本號

\x1b[1m範例:\x1b[0m
  npx craftspec init
  npx craftspec "我想做一個暗黑極簡的手錶電商網站"
  npx craftspec "現代 SaaS 數據分析儀表板"
`);
  process.exit(0);
}

if (command === '--version' || command === '-v') {
  const pkg = JSON.parse(fs.readFileSync(path.join(pkgRoot, 'package.json'), 'utf8'));
  console.log(`CraftSpec v${pkg.version}`);
  process.exit(0);
}

if (command === 'init') {
  console.log('\x1b[36m[CraftSpec]\x1b[0m 正在為當前專案注入全主流 AI 設計系統與防線規範...');
  const targetDir = process.cwd();

  const filesToCopy = [
    { src: 'AGENTS.md', dest: 'AGENTS.md' },
    { src: 'CLAUDE.md', dest: 'CLAUDE.md' },
    { src: '.cursorrules', dest: '.cursorrules' },
    { src: '.windsurfrules', dest: '.windsurfrules' },
    { src: '.cursor/rules/craftspec.mdc', dest: '.cursor/rules/craftspec.mdc' },
    { src: '.github/copilot-instructions.md', dest: '.github/copilot-instructions.md' },
    { src: 'skills/craftspec/SKILL.md', dest: '.agents/skills/craftspec/SKILL.md' },
    { src: 'skills/craftspec/SKILL.md', dest: 'skills/craftspec/SKILL.md' },
    { src: '.devin-plugin/plugin.json', dest: '.devin-plugin/plugin.json' }
  ];

  let copied = 0;
  for (const item of filesToCopy) {
    const srcPath = path.join(pkgRoot, item.src);
    const destPath = path.join(targetDir, item.dest);
    if (fs.existsSync(srcPath)) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
      console.log(`  \x1b[32m✔\x1b[0m 建立: ${item.dest}`);
      copied++;
    }
  }

  console.log(`\n\x1b[32m[成功]\x1b[0m 已成功注入 ${copied} 個設定檔！`);
  console.log('現在 Cursor、Windsurf、Claude Code、GitHub Copilot 與 Devin 將全面自動遵守 CraftSpec 的「The Floor」底線規範。\n');
  process.exit(0);
}

// 一般需求優化
const archetypes = {
  swiss: {
    name: '瑞士極簡刊物 (Swiss Editorial)',
    colors: { bg: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', muted: '#64748B', border: '#E2E8F0', accent: '#E11D48' },
    typography: 'Display: Inter (800) / Body: Inter',
    vibe: '黑白高反差、大膽字體比例、無襯線經典、高留白呼吸感'
  },
  darkTech: {
    name: '暗黑戰術工程 (Tactical Dark Tech)',
    colors: { bg: '#0B0D0F', surface: '#14171A', text: '#F3F4F6', muted: '#9CA3AF', border: '#242B35', accent: '#10B981' },
    typography: 'Display: JetBrains Mono / Body: Inter',
    vibe: '冷炭黑底、等寬字體、細微邊框、狀態警示光、數據高密度'
  },
  luxury: {
    name: '靜謐暖調奢華 (Quiet Luxury)',
    colors: { bg: '#FDFBF7', surface: '#FFFFFF', text: '#1C1917', muted: '#78716C', border: '#E7E5E4', accent: '#B45309' },
    typography: 'Display: Cormorant Garamond / Body: Plus Jakarta Sans',
    vibe: '暖米灰底、優雅襯線 Display 字體、微光澤邊框、柔和呼吸感'
  },
  wabiSabi: {
    name: '日系極簡紙感 (Wabi-Sabi Paper)',
    colors: { bg: '#F4EFEA', surface: '#FAF7F2', text: '#2C2A29', muted: '#7D7571', border: '#D6CCC2', accent: '#4A5568' },
    typography: 'Display: Shippori Mincho / Body: Noto Sans',
    vibe: '暖灰手作紙質感、沈穩排版、極致質樸克制'
  },
  brutalist: {
    name: '工業機能藍圖 (Industrial Brutalist)',
    colors: { bg: '#E5E5E5', surface: '#F0F0F0', text: '#0A0A0A', muted: '#525252', border: '#000000', accent: '#FF5500' },
    typography: 'Display: Space Mono / Body: Chivo',
    vibe: '嚴密格線外露、機械刻度感、高資訊密度、單色高對比'
  },
  cyber: {
    name: '賽博幾何藍圖 (Cyber Blueprint)',
    colors: { bg: '#080E18', surface: '#0C1626', text: '#E2E8F0', muted: '#94A3B8', border: '#1E293B', accent: '#06B6D4' },
    typography: 'Display: Chakra Petch / Body: Fira Code',
    vibe: '深藍夜色底、青色訊號、幾何節點拓撲、深科技氛圍'
  }
};

const inputQuery = args.join(' ');

let style = archetypes.swiss;
if (inputQuery.includes('暗黑') || inputQuery.includes('黑') || inputQuery.includes('科技') || inputQuery.includes('工程')) {
  style = archetypes.darkTech;
} else if (inputQuery.includes('奢華') || inputQuery.includes('精品') || inputQuery.includes('珠寶') || inputQuery.includes('高級')) {
  style = archetypes.luxury;
} else if (inputQuery.includes('日系') || inputQuery.includes('人文') || inputQuery.includes('書') || inputQuery.includes('簡樸')) {
  style = archetypes.wabiSabi;
} else if (inputQuery.includes('工業') || inputQuery.includes('製造') || inputQuery.includes('brutal') || inputQuery.toLowerCase().includes('industrial')) {
  style = archetypes.brutalist;
} else if (inputQuery.includes('賽博') || inputQuery.includes('藍圖') || inputQuery.toLowerCase().includes('cyber') || inputQuery.toLowerCase().includes('blueprint')) {
  style = archetypes.cyber;
}

console.log('\n\x1b[1m\x1b[36m================================================================');
console.log('       CraftSpec — AI 設計規格書與 Prompt 最佳化引擎            ');
console.log('================================================================\x1b[0m\n');

console.log(`\x1b[1m[用戶原始需求]:\x1b[0m "${inputQuery}"\n`);
console.log('\x1b[33m--- [第一部分：設計定位與專屬記憶點] ---\x1b[0m');
console.log(`- 推薦美學流派: \x1b[1m${style.name}\x1b[0m`);
console.log(`- 調性描述:     ${style.vibe}`);
console.log(`- 字體階層建議: ${style.typography}`);
console.log(`- 設計色彩變數 (Tokens):`);
console.log(`    * Background: ${style.colors.bg}`);
console.log(`    * Surface:    ${style.colors.surface}`);
console.log(`    * Primary:    ${style.colors.text}`);
console.log(`    * Secondary:  ${style.colors.muted}`);
console.log(`    * Border:     ${style.colors.border} (1px 實線細描邊)`);
console.log(`    * Accent:     ${style.colors.accent}`);

console.log('\n\x1b[33m--- [第二部分：不可逾越的硬性防線 (The Floor)] ---\x1b[0m');
console.log('1. 嚴禁任何紫色漸變與發光邊框 (No purple gradients or glow effects)。');
console.log('2. 嚴禁 transition: all 與對寬高做動畫（僅允許 transform/opacity）。');
console.log('3. 嚴禁卡片套卡片（Cards inside cards），嚴禁 Emoji 充當圖標。');
console.log('4. 嚴禁虛構數據或滿意度百分比（No invented metrics）。');
console.log('5. 1280x800 首屏標題、一句話主張與主 CTA 必須無需滾動完整可見。');
console.log('6. 行動端所有點擊熱區不得小於 44x44px，標題採用 clamp() 防折行。');

console.log('\n\x1b[33m--- [第三部分：可直接交給 AI 的任務提示詞 (Ready-to-use Prompt)] ---\x1b[0m\n');

const prompt = `\`\`\`markdown
# 專業前端介面設計與實作任務書

## 任務目標
請為「${inputQuery}」設計並實作一個無任何 AI 模板套路感、現代精緻且符合工藝標準的前端介面。

## 視覺規範 (Tokens)
- 美學流派: ${style.name}
- Background: \`${style.colors.bg}\`
- Surface: \`${style.colors.surface}\`
- Text Primary: \`${style.colors.text}\`
- Text Secondary: \`${style.colors.muted}\`
- Border: \`${style.colors.border}\`
- Accent: \`${style.colors.accent}\`
- 字體搭配: ${style.typography}

## 硬性約束 (The Floor)
- 嚴禁紫色漸變、隨意外陰影、卡片包卡片與 Emoji 圖標（一律採用 Lucide SVG）。
- 嚴禁 transition: all，動畫過渡僅限 transform 與 opacity。
- 嚴禁虛構數據與客戶好評，真實客觀呈現。
- 按鈕與互動元素確保包含 hover、active、focus-visible 與 disabled 完整狀態。
- 行動端按鈕最小熱區 44x44px，確保無橫向溢出捲軸。
\`\`\``;

console.log(prompt);
console.log('\n\x1b[1m\x1b[36m================================================================\x1b[0m\n');
