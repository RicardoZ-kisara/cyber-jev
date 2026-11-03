"use strict";
const chinese = {
skip:"跳转到正文",titleHome:"Cyber-JEV · 源代码漏洞初筛",titleMethod:"方法 · Cyber-JEV",titleResults:"实验结果 · Cyber-JEV",titlePaper:"论文 · Cyber-JEV",navMethod:"方法",navResults:"结果",navPaper:"论文",heroEyebrow:"机器学习 × 软件安全",heroSubtitle:"从<em>修复</em>中学习。<br>让审查更聚焦。",heroDescription:"面向源代码漏洞初筛的语言模型匹配对比微调方法。",readPaper:"阅读论文",seeResults:"查看结果",visualTitle:"微小的修改，有价值的信号。",fixCommit:"一次安全修复",beforeFix:"修复之前",
afterFix:"修复之后",vulnerable:"漏洞函数",patched:"修复版本",learnRank:"学习将漏洞版本排在修复版本之前。",singleInput:"推理时：一个函数 → 一个分数。",equalContribution:"* 共同第一作者",metric1:"测试集 AUROC",metric1Note:"五模型集成。",metric2:"漏检漏洞数",metric2Note:"相同预算：各 4,031 条告警。",metric3:"评测函数",metric3Note:"来自 57 个项目。",problemEyebrow:"研究问题",problemTitle:"模型学到的是漏洞，<br>还是项目风格？",problemLead:"安全漏洞档案积累了大量漏洞函数，却常常缺少与之匹配的修复后版本。",sourceTitle:"数据来源捷径",
sourceText:"当某个数据源只提供漏洞样本时，模型可能通过代码格式和命名习惯猜测标签，而没有识别漏洞。",patchTitle:"补丁敏感性不足",patchText:"模型的整体排序表现可以不错，却仍然把已经修复的函数评为比原始漏洞函数更危险。",exploreTitle:"继续阅读",exploreMethod:"修复提交与参考数据如何共同训练同一个模型。",exploreResults:"整体排序、固定审查预算与补丁敏感性。",explorePaper:"完整论文，包含评测协议、基线与局限。",methodTitle:"在组内比较，<br>对单个函数评分。",methodIntro:"修复提交提供匹配比较，参考数据支撑分类学习；两项任务共同更新同一个模型。",step1Figure:"个匹配组，文件快照经校验",step1Title:"构建匹配组",
step1Text:"从修复提交中重建漏洞函数、修复版本，以及同一文件中最多两个保持不变的函数。",context:"同文件上下文 × 2",step2Figure:"参数的 Qwen3.5 骨干模型，两项任务共享",step2Title:"联合训练两项任务",step2Text:"对参考池中的函数进行分类，同时在每个匹配组内学习将漏洞函数排在其他成员之前。",classification:"参考池分类",groupRanking:"组内排序",inference:"推理",step3Figure:"次前向计算（每个模型、每个函数）",step3Title:"安排审查优先级",step3Text:"为单个函数输出分数，再按分数排序，在审查预算内选择需要进一步分析的函数。",
methodNote:"修复版本与不变函数提供弱监督，并非经独立人工确认的无漏洞标签。外部匹配组只参与排序，分类项仅使用参考池。",nextResults:"下一页：实验结果",resultsTitle:"用审查决策衡量效果。",resultsIntro:"在 C/C++ 函数上开展离线评测。除特别注明外，Cyber-JEV 的结果来自五模型集成。",tabRanking:"整体排序",r1Text:"在 7,270 个测试函数上，各系统把漏洞函数排在其他函数之前的能力。",ap:"平均精确率",lengthAuc:"长度分层 AUROC",rankingNote:"仅用参考池微调的 AUROC 为 0.804。与 Cyber-JEV 的整体差距较小，不能据此断言 AUROC 显著优于该基线；补丁配对行为提供了另一项比较。这些结果只对应本文基准，不代表对所有工具的普遍排名。",
tabBudget:"固定审查预算",r2Text:"两个系统都恰好标记 4,031 个函数。在 322 个漏洞函数中，各自找到了多少？",missedWord:"个漏检",foundKey:"检出",missedKey:"漏检",budgetNote:"4,031 条告警即 Jev 1.13 在默认阈值下标记的函数数量。Cyber-JEV 仍漏检 16 个漏洞函数。",tabPatches:"补丁敏感性",r3Text:"漏洞–修复配对中，漏洞版本得分更高的比例；平分计半分。每行的阴影长度表示该百分比。",referenceOnly:"仅参考池训练",patchedOnly:"仅修复版本匹配组（三模型）",setMain:"主测试集",
patchNote:"A72 与 P309 为外部 TitanVul 配对集。仅使用修复版本匹配组训练在这些配对测试上更高，体现了整体排序与补丁敏感性之间的取舍。",evidenceNote:"训练与保护性评测划分按项目、CVE、修复提交和代码相似性隔离。论文报告按项目聚类的 bootstrap 区间及配对检验。数据集原始标签和提交衍生弱监督仍有各自的局限。",scopeEyebrow:"在软件审查中的角色",scopeTitle:"先筛选，<br>再深入判断。",scopeText:"预期用途是为发生变化的函数排序，再交由静态分析、规则或安全审查人员深入检查。",scopeNote:"当前实验针对历史函数和修复。尚未验证真实 Pull Request 部署、新漏洞发现或与其他工具的吞吐量比较。分数用于分配审查注意力，不能证明代码安全。",nextPaper:"下一页：阅读论文",
paperTitle:"方法、结果，<br>以及完整上下文。",factPages:"页",factFigures:"幅图",factDate:"10 月稿件",downloadPaper:"打开论文 PDF",paperMeta:"英文撰写。结果基于离线历史基准。",citationTitle:"引用本稿件",copy:"复制 BibTeX",downloadBib:"下载 .bib 文件 ↓",availability:"本项目页不分发研究源码、模型权重或数据集。",pageRepo:"项目展示页仓库 ↗",rights:"保留所有权利。",hunkBench:"离线评测 · C/C++ 函数",ctxFunctions:"个测试函数",ctxVulnerable:"个漏洞函数",oneGroup:"一个匹配组",reviewBudget:"审查预算",
cellsHunk:"322 个漏洞函数 · 每格一个",budgetHunk:"相同的 4,031 条告警",foundTitle:"检出的漏洞函数",falseAlarms:"误报",pts:"个百分点"
};
const storageKey = "cyber-jev-language";
const elements = [...document.querySelectorAll("[data-i18n]")];
const english = new Map(elements.map(el => [el, el.innerHTML]));
let language = "en";
const languageButton = document.getElementById("language");
function setLanguage(next) {
  language = next;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  elements.forEach(el => { el.innerHTML = language === "zh" ? chinese[el.dataset.i18n] : english.get(el); });
  languageButton.querySelector(".language-label").textContent = language === "zh" ? "EN" : "中文";
  languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换为中文");
  try { localStorage.setItem(storageKey, language); } catch (_) {}
}
languageButton.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));
try { if (localStorage.getItem(storageKey) === "zh") setLanguage("zh"); } catch (_) {}

const copyButton = document.getElementById("copy-citation");
if (copyButton) copyButton.addEventListener("click", async () => {
  const citation = document.getElementById("citation-text");
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copyButton.textContent = language === "zh" ? "已复制 ✓" : "Copied ✓";
    status.textContent = language === "zh" ? "引用已复制到剪贴板。" : "Citation copied to clipboard.";
  } catch (_) {
    const range = document.createRange(); range.selectNodeContents(citation);
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    copyButton.textContent = language === "zh" ? "请复制所选文本" : "Copy selected text";
    status.textContent = language === "zh" ? "已选中引用文本，请手动复制或下载文件。" : "Citation selected. Copy the selected text or download the BibTeX file.";
  }
});

document.querySelectorAll(".cells").forEach(grid => {
  const found = Number(grid.dataset.found), missed = Number(grid.dataset.missed);
  grid.innerHTML = "<i></i>".repeat(found) + '<i class="missed"></i>'.repeat(missed);
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduceMotion) {
  const revealer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("in"); revealer.unobserve(entry.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".diff-panel, .problem > div, .findings li, .tree-row, .commit, .chapter-title, .cells-block, .doc-comment, .scope-section > div, .next-file").forEach(el => {
    if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("reveal"); revealer.observe(el); }
  });
}
