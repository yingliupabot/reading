// scripts/build-readme.js — regenerate the README index block from the idea catalog.
// Run from the repo root: node scripts/build-readme.js
// It only replaces the block between <!-- README-INDEX:START --> and
// <!-- README-INDEX:END --> in README.md. Everything else is untouched.
// Source of truth: trading-ideas/ideas/catalog.json (published notes only in the
// article table; killed/backlog counts go into the stats, the full catalog table
// lives on the site, not in README).
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'trading-ideas', 'ideas', 'catalog.json'), 'utf8'));
const ideas = catalog.ideas || [];
const count = (s) => ideas.filter((i) => i.status === s).length;
const published = ideas.filter((i) => i.status === 'published')
  .sort((a, b) => String(b.date_added || '').localeCompare(String(a.date_added || '')));
const wins = ideas.filter((i) => i.verdict === 'win').length;
// Reading chapters: published on the site, not in catalog.json. Keep this list
// in sync with notes.html when a new chapter ships.
const reading = [
  { date: '2026-10-12', title: '《逃不开的经济周期》第 3 章 · 金钱梦之队', url: '读书笔记/逃不开的经济周期/03-金钱梦之队/' },
  { date: '2026-10-08', title: '《逃不开的经济周期》第 2 章 · 现金支付危机', url: '读书笔记/逃不开的经济周期/02-现金支付危机/' },
  { date: '2026-09-19', title: '《逃不开的经济周期》第 1 章 · 密西西比泡沫破裂', url: '读书笔记/逃不开的经济周期/01-密西西比泡沫/' },
];
const rows = [
  ...published.map((i) => ({ date: i.date_added, title: i.title, cat: '交易研读', url: String(i.note_url || '').replace(/^\.\.\//, '') })),
  ...reading.map((r) => ({ date: r.date, title: r.title, cat: '读书笔记', url: r.url })),
].sort((a, b) => String(b.date).localeCompare(String(a.date)));
const today = new Date().toISOString().slice(0, 10);
const block = [
  '## 📊 统计', '',
  `- **已发布笔记**: ${rows.length} 篇（交易研读 ${published.length} 篇 + 读书笔记 ${reading.length} 篇）`,
  `- **点子库**: ${ideas.length} 条（已发布 ${count('published')} · 已杀 ${count('killed')} · 待扒 ${count('backlog')}）`,
  `- **回测结论**: 跑赢 baseline ${wins} 条`,
  `- **读书笔记**: 《逃不开的经济周期》已发布 ${reading.length} / 33 章`,
  `- **最后更新**: ${today}（以 catalog.json 为准；见下方自动同步）`, '',
  '## 🗂️ 按类别浏览', '',
  '| 类别 | 篇数 |', '| --- | ---: |',
  `| 交易研读 | ${published.length} 篇 |`,
  `| 读书笔记 | ${reading.length} 篇 |`,
  `| 点子库（全部状态，见 trading-ideas/ideas/） | ${ideas.length} 条 |`, '',
  '## 📑 文章列表', '',
  '| 标题 | 日期 | 分类 |', '| --- | --- | --- |',
  ...rows.map((r) => `| [${r.title}](${r.url}) | ${r.date} | ${r.cat} |`), '',
  '> 点子库全表（含已杀点子的死因）在网站的点子库页，不在上面这张表里重复：见 `trading-ideas/ideas/`（网站：Trading Ideas → 点子库）。',
].join('\n');
const readmePath = path.join(root, 'README.md');
const readme = fs.readFileSync(readmePath, 'utf8');
const re = /<!-- README-INDEX:START -->[\s\S]*?<!-- README-INDEX:END -->/;
if (!re.test(readme)) { console.error('README.md: README-INDEX markers not found, refusing to rewrite'); process.exit(1); }
fs.writeFileSync(readmePath, readme.replace(re, `<!-- README-INDEX:START -->\n${block}\n<!-- README-INDEX:END -->`));
console.log(`README index regenerated: ${rows.length} articles, ${ideas.length} catalog ideas`);
