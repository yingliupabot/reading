# trading-ideas

交易想法、Pine Script 研读和读书笔记。附带一个 GitHub Pages 静态站当 UI：

👉 https://yingliupabot.github.io/reading/

<!-- README-INDEX:START -->
## 📊 统计

- **已发布笔记**: 15 篇（交易研读 12 篇 + 读书笔记 3 篇）
- **点子库**: 103 条（已发布 12 · 已杀 81 · 待扒 10）
- **回测结论**: 跑赢 baseline 4 条（动量熊市 Overlay、条件式波动率管理、堕落天使反转、CEF 折价五分位）
- **读书笔记**: 《逃不开的经济周期》已发布 3 / 33 章
- **世界地图词条**: 37 条
- **最后更新**: 2026-10-31（仓库已由 trading-ideas 更名为 reading）（以 catalog.json 为准；见下方自动同步）

## 🗂️ 按类别浏览

| 类别 | 篇数 |
| --- | ---: |
| 交易研读 | 12 篇 |
| 读书笔记 | 3 篇 |
| 点子库（全部状态，见 trading-ideas/ideas/） | 103 条 |

## 📑 文章列表

| 标题 | 日期 | 分类 |
| --- | --- | --- |
| [《逃不开的经济周期》第 3 章 · 金钱梦之队](读书笔记/逃不开的经济周期/03-金钱梦之队/) | 2026-10-12 | 读书笔记 |
| [《逃不开的经济周期》第 2 章 · 现金支付危机](读书笔记/逃不开的经济周期/02-现金支付危机/) | 2026-10-08 | 读书笔记 |
| [条件式多因子 volatility management（自研）](trading-ideas/portfolio/conditional-volmanage/) | 2026-09-25 | 交易研读 |
| [封闭式基金折价五分位套利](trading-ideas/cef/cef-discount-quintile/) | 2026-09-25 | 交易研读 |
| [堕落天使强制抛售反转](trading-ideas/credit/fallen-angels-reversal/) | 2026-09-25 | 交易研读 |
| [BTC MVRV估值择时](trading-ideas/crypto/btc-mvrv-timing/) | 2026-09-24 | 交易研读 |
| [Prop Trading 到底有多少种？一张赚钱模式地图](trading-ideas/industry/prop-trading-firms/) | 2026-09-21 | 交易研读 |
| [《逃不开的经济周期》第 1 章 · 密西西比泡沫破裂](读书笔记/逃不开的经济周期/01-密西西比泡沫/) | 2026-09-19 | 读书笔记 |
| [动量熊市 Overlay](trading-ideas/portfolio/momentum-regime-overlay/) | 2026-09-18 | 交易研读 |
| [Returns to Buying Winners and Selling Losers 研读](trading-ideas/papers/momentum-jegadeesh-titman-1993/) | 2026-09-18 | 交易研读 |
| [OHLC 之外：散户可用的数据源地图](trading-ideas/data-sources/beyond-ohlc/) | 2026-09-18 | 交易研读 |
| [Empirical Asset Pricing via Machine Learning 研读](trading-ideas/papers/ml-asset-pricing-gu-kelly-xiu-2020/) | 2026-09-18 | 交易研读 |
| [Close-Near-Low 均值回归策略研读](trading-ideas/reddit-strategies/close-near-low/) | 2026-09-18 | 交易研读 |
| [Volume Delta Footprint Map 研读](trading-ideas/tradingview-pine-scripts/volume-delta-footprint/) | 2026-09-17 | 交易研读 |
| [Intrabar Profile 研读](trading-ideas/tradingview-pine-scripts/intrabar-profile/) | 2026-09-17 | 交易研读 |

> 点子库全表（含已杀点子的死因）在网站的点子库页，不在上面这张表里重复：见 `trading-ideas/ideas/`（网站：Trading Ideas → 点子库）。
<!-- README-INDEX:END -->

## 🔄 自动同步

这张表不是手写的。发布新笔记时，跑 `node scripts/build-readme.js`，它读 `trading-ideas/ideas/catalog.json`（点子库唯一真相源）重新生成上面 `📊 统计` 与 `📑 文章列表` 两节（`<!-- README-INDEX:START -->` / `<!-- README-INDEX:END -->` 之间），其余章节不动。脚本随本 README 一起提交在 `scripts/build-readme.js`，下次发笔记（包括主聊那批待发布的 staged diff）时重跑一次即可，README 不会因此变旧。

## 目录

- `trading-ideas/` — 交易研读：Pine Script 源码 + HTML 分析、策略回测、论文、数据源、组合
- `读书笔记/` — 读书笔记（绘本连载）
- `世界地图/` — 世界历史时间轴（互动地图，JS 前端）
- `index.html` / `notes.html` — 静态站首页与读书笔记目录（GitHub Pages）

## 加一个词条

```bash
mkdir -p 词条/1637-郁金香狂热
$EDITOR 词条/1637-郁金香狂热/meta.json
npm run index          # 重新生成 世界地图/词条.js
npm run shot -- 世界地图/index.html   # 想看效果
```

`status` 标 `点亮` / `在读` / `想读`。不懂的先标「想读」，地球上会显示成虚线圈 —— 看得见自己还没走到哪儿，比只看得见走过的地方重要。

也可以在世界地图页面右下角点「✎ 词条」直接改状态，导出后粘回文件。

## 说明

纯学习记录，不构成投资建议。
