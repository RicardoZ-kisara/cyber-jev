"use strict";
const chinese = {
skip:"跳转到正文",navMethod:"方法",navResults:"结果",navPaper:"论文",heroEyebrow:"机器学习 × 软件安全",heroSubtitle:"从<em>修复</em>中学习。<br>让审查更聚焦。",heroDescription:"面向源代码漏洞初筛的语言模型匹配对比微调方法。",readPaper:"阅读论文",exploreMethod:"了解方法",manuscriptLabel:"研究稿件 · 2026 年 10 月",visualTitle:"微小的修改，有价值的信号。",fixCommit:"一次安全修复",patchLabel:"补丁",matchedComparison:"同源匹配比较",beforeFix:"修复之前",afterFix:"修复之后",vulnerable:"漏洞函数",patched:"修复版本",learnRank:"学习将漏洞版本排在修复版本之前。",singleInput:"推理时：一个函数 → 一个分数。",conceptual:"概念示意图",equalContribution:"* 共同第一作者",metric1:"测试集 AUROC",metric1Note:"五模型集成 · Jev 1.13：0.743",metric2:"漏检漏洞数",metric2Note:"Jev → Cyber-JEV · 同为 4,031 条告警",metric3:"评测函数",metric3Note:"57 个项目 · 322 个漏洞函数",problemEyebrow:"01 / 研究问题",problemTitle:"模型学到的是漏洞，<br>还是项目风格？",problemLead:"安全漏洞档案积累了大量漏洞函数，却常常缺少与之匹配的修复后版本。",sourceTitle:"数据来源捷径",sourceText:"当某个数据源只提供漏洞样本时，模型可能通过代码格式和命名习惯猜测标签，而没有识别漏洞。",patchTitle:"补丁敏感性不足",patchText:"模型的整体排序表现可以不错，却仍然把已经修复的函数评为比原始漏洞函数更危险。",methodEyebrow:"02 / 方法概览",methodTitle:"在组内比较，<br>对单个函数评分。",methodIntro:"修复提交提供匹配比较，参考数据支撑分类学习；两项任务共同更新同一个模型。",step1Title:"构建匹配组",step1Text:"从修复提交中重建漏洞函数、修复版本，以及同一文件中最多两个保持不变的函数。",context:"同文件上下文 × 2",step1Bottom:"2,829 个匹配组 · 文件快照经校验",step2Title:"联合训练两项任务",step2Text:"对参考池中的函数进行分类，同时在每个匹配组内学习将漏洞函数排在其他成员之前。",classification:"参考池分类",groupRanking:"组内排序",step2Bottom:"共享 Qwen3.5-4B 骨干模型",inference:"推理",step3Title:"安排审查优先级",step3Text:"为单个函数输出分数，再按分数排序，在审查预算内选择需要进一步分析的函数。",step3Bottom:"每个模型对每个函数执行一次前向计算",methodNote:"修复版本与不变函数提供弱监督，并非经独立人工确认的无漏洞标签。外部匹配组只参与排序，分类项仅使用参考池。",resultsEyebrow:"03 / 实验结果",resultsTitle:"用审查决策衡量效果。",resultsIntro:"在 C/C++ 函数上开展离线评测。除特别注明外，Cyber-JEV 的结果来自五模型集成。",tabRanking:"整体排序",tabBudget:"固定审查预算",tabPatches:"补丁敏感性",rankingCaption:"主测试集 · 7,270 个函数",system:"系统",ap:"平均精确率 ↑",lengthAuc:"长度分层 AUROC ↑",ensemble:"五模型",rankingNote:"仅用参考池微调的 AUROC 为 0.804。与 Cyber-JEV 的整体差距较小，不能据此断言 AUROC 显著优于该基线；补丁配对行为提供了另一项比较。这些结果只对应本文基准，不代表对所有工具的普遍排名。",budgetCaption:"相同的 4,031 条告警预算 · 322 个漏洞函数",detected:"检出 ↑",missed:"漏检 ↓",falseAlarms:"误报 ↓",budgetNote:"告警数量与 Jev 1.13 默认阈值下的结果对齐。两者都标记 4,031 个函数。在该工作点，Cyber-JEV 多检出 23 个漏洞函数，但仍漏检 16 个。",patchCaption:"漏洞–修复配对排序 · 平分计半分",training:"训练设置",referenceOnly:"仅参考池训练",patchedOnly:"仅修复版本匹配组（三模型）",patchNote:"T271 来自主测试集；A72 和 P309 为外部 TitanVul 配对集。完整 Cyber-JEV 比仅参考池训练分别提高 14.8、29.2 和 14.9 个百分点。仅修复版本组在这些配对测试上更高，体现了整体排序与补丁敏感性之间的取舍。",evidenceNote:"训练与保护性评测划分按项目、CVE、修复提交和代码相似性隔离。论文报告按项目聚类的 bootstrap 区间及配对检验。数据集原始标签和提交衍生弱监督仍有各自的局限。",scopeEyebrow:"在软件审查中的角色",scopeTitle:"先筛选，<br>再深入判断。",scopeText:"预期用途是为发生变化的函数排序，再交由静态分析、规则或安全审查人员深入检查。",scopeNote:"当前实验针对历史函数和修复。尚未验证真实 Pull Request 部署、新漏洞发现或与其他工具的吞吐量比较。分数用于分配审查注意力，不能证明代码安全。",paperEyebrow:"04 / 阅读完整研究",paperTitle:"方法、结果，<br>以及完整上下文。",downloadPaper:"打开论文 PDF",paperMeta:"8 页 · 英文 · 2026 年 10 月稿件",citationTitle:"引用本稿件",copy:"复制 BibTeX",downloadBib:"下载 .bib 文件 ↓",availability:"本项目页不分发研究源码、模型权重或数据集。",pageRepo:"项目展示页仓库 ↗",rights:"保留所有权利。"
};
const elements = [...document.querySelectorAll("[data-i18n]")];
const english = new Map(elements.map(el => [el, el.innerHTML]));
let language = "en";
const languageButton = document.getElementById("language");
languageButton.addEventListener("click", () => {
  language = language === "en" ? "zh" : "en";
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  elements.forEach(el => { el.innerHTML = language === "zh" ? chinese[el.dataset.i18n] : english.get(el); });
  languageButton.querySelector(".language-label").textContent = language === "zh" ? "EN" : "中文";
  languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换为中文");
  document.title = language === "zh" ? "Cyber-JEV · 源代码漏洞初筛" : "Cyber-JEV · Source-code vulnerability triage";
});
const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTab(tab, moveFocus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute("aria-controls")).hidden = !selected;
  });
  if (moveFocus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", event => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); activateTab(tabs[next], true); }
  });
});
document.getElementById("copy-citation").addEventListener("click", async () => {
  const citation = document.getElementById("citation-text");
  const status = document.getElementById("copy-status");
  const button = document.getElementById("copy-citation");
  try {
    await navigator.clipboard.writeText(citation.textContent);
    button.textContent = language === "zh" ? "已复制 ✓" : "Copied ✓";
    status.textContent = language === "zh" ? "引用已复制到剪贴板。" : "Citation copied to clipboard.";
  } catch (_) {
    const range = document.createRange(); range.selectNodeContents(citation);
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    button.textContent = language === "zh" ? "请复制所选文本" : "Copy selected text";
    status.textContent = language === "zh" ? "已选中引用文本，请手动复制或下载文件。" : "Citation selected. Copy the selected text or download the BibTeX file.";
  }
});
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduceMotion) {
  const revealer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("in"); revealer.unobserve(entry.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".metric, .problem > div, .section-heading, .pipeline-step, .tabs, .table-card, .evidence-note, .scope-section > div, .paper-inner > div").forEach(el => {
    if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("reveal"); revealer.observe(el); }
  });
}
const navLinks = [...document.querySelectorAll(".header nav a")];
const navTargets = navLinks.map(link => document.querySelector(link.getAttribute("href")));
let navFrame = 0;
function highlightNav() {
  navFrame = 0;
  const line = window.innerHeight * 0.4;
  let current = -1;
  navTargets.forEach((target, index) => { if (target && target.getBoundingClientRect().top <= line) current = index; });
  navLinks.forEach((link, index) => link.classList.toggle("active", index === current));
}
window.addEventListener("scroll", () => { if (!navFrame) navFrame = requestAnimationFrame(highlightNav); }, { passive: true });
highlightNav();
