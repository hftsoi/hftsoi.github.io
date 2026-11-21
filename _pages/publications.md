---
layout: single
title: "Selected Publications"
description: "Ho Fung Tsoi's publications"
seo_title: "Ho Fung Tsoi · Publications"
permalink: /publications/
author_profile: false
---

<style>
@media (min-width: 900px) {
  #main { max-width: 1000px; }
  .page {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

.grey { color: #989898ff; }

/* year section heading */
.pub-year {
  font-size: 1.35em;
  font-weight: 700;
  margin: 0.5em 0 0.3em;
}
.pub-year:first-of-type { margin-top: 0.5em; }

/* reversed numbering: use native <ol reversed> */
.rev-ol {
  padding-left: 2.2em;
  margin-left: 0;
  margin-top: 0.4em;
  margin-bottom: 0.20em;
}
.rev-ol > li {
  margin-bottom: 0.35em;
}
/* optional: style the numbers */
.rev-ol > li::marker {
  font-weight: 400;
}
/* each line: text on the left, link parked on the right (like \hfill) */
.pub-row {
  display: flex;
  align-items: baseline;
  gap: 1em;
}
.pub-left  { flex: 1 1 auto; min-width: 0; }
.pub-right { flex: 0 0 auto; white-space: nowrap; text-align: right; }
@media (max-width: 600px) {
  .pub-row   { display: block; }
  .pub-right { display: block; }
}
/* arXiv:xxxx.xxxxx links (right side of the author row only, not venue links)
   in LaTeX xcolor (dvipsnames) BrickRed: cmyk(0,0.89,0.94,0.28) */
.pub-row + .pub-row .pub-right a[href*="arxiv.org/abs/"]       { color: #b8140b; }
.pub-row + .pub-row .pub-right a[href*="arxiv.org/abs/"]:hover { color: #8a0f08; }
</style>

Listed below are selected publications to which I was a primary author. I also co-authored papers by [CMS](https://cms.cern/collaboration) and [ATLAS](https://atlas.cern/) as a collaboration member. Complete list at [INSPIRE](https://inspirehep.net/authors/1791418). Preprints at [arXiv](https://arxiv.org/a/tsoi_h_1.html).

<!--
  Publications are grouped by year (newest first) with a single running number
  per item (oldest = 1, newest = highest). Each year is its own <ol reversed>
  whose `start` is the number of its TOP (newest) item.
  To add a paper: insert a new <li> in the right year and bump the `start` of
  that year's <ol> and of every newer (later) year's <ol> by one.
-->

<div class="pub-year">2026</div>
<ol class="rev-ol" reversed start="15" markdown="1">
   <li>
      <div class="pub-row"><span class="pub-left">SuperJEPA: Pretraining with a Supervision-Augmented Joint-Embedding Predictive Architecture for High Energy Physics</span><span class="pub-right"><em>under review</em></span></div>
      <div class="pub-row"><span class="pub-left"><span class="grey">Dylan Rankin,</span> <strong><u>Ho Fung Tsoi</u></strong></span><span class="pub-right"><a href="https://arxiv.org/abs/2610.36121">arXiv:2610.36121</a></span></div>
   </li>

   <li>
      <div class="pub-row"><span class="pub-left">SpikePID: Real-Time Neuromorphic Cluster Counting in Future Drift Chambers</span><span class="pub-right"><em>under review</em></span></div>
      <div class="pub-row"><span class="pub-left"><strong><u>Ho Fung Tsoi</u></strong><span class="grey">, Kam Wai Lai, Dylan Rankin</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2611.00104">arXiv:2611.00104</a></span></div>
   </li>

   <li>
      <div class="pub-row"><span class="pub-left">Similarity Pairing with Energy Mover's Distance for Self-Supervised Pre-Training at the LHC</span><span class="pub-right"><a href="https://arxiv.org/abs/2609.17738"><em>ML4PS 2026</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><strong><u>Ho Fung Tsoi</u></strong><span class="grey">, Dylan Rankin</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2609.17738">arXiv:2609.17738</a></span></div>
   </li>

   <li>
      <div class="pub-row"><span class="pub-left">Self-Supervised Learning for Robust Resonance Mass Regression in Cascade Decays</span><span class="pub-right"><a href="https://arxiv.org/abs/2609.17726"><em>ML4PS 2026</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><strong><u>Ho Fung Tsoi</u></strong><span class="grey">, Alex Yang, Luis Felipe Gutierrez Zagazeta, Shion Chen, Dylan Rankin</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2609.17726">arXiv:2609.17726</a></span></div>
   </li>

   <li>
      <div class="pub-row"><span class="pub-left">jBOT: Semantic Jet Representation Clustering Emerges from Self-Distillation</span><span class="pub-right"><a href="https://scipost.org/10.21468/SciPostPhys.21.3.053"><em>SciPost Phys.</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><strong><u>Ho Fung Tsoi</u></strong><span class="grey">, Dylan Rankin</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2601.11719">arXiv:2601.11719</a></span></div>
   </li>

   <li>
      <div class="pub-row"><span class="pub-left">Machine Can Automatically Discover Parametric Functions to Model HEP Data</span><span class="pub-right"><a href="https://arxiv.org/abs/2607.19750"><em>ICHEP 2026</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><strong><u>Ho Fung Tsoi</u></strong><span class="grey">, Dylan Rankin, Cecile Caillol, Miles Cranmer, Sridhara Dasu, Javier Duarte, Philip Harris, Elliot Lipeles</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2607.19750">arXiv:2607.19750</a></span></div>
   </li>

   <li>
      <div class="pub-row"><span class="pub-left">Anomaly Detection in the CMS Level-1 Trigger in Run 3</span><span class="pub-right"><em>manuscript in preparation</em></span></div>
      <div class="pub-row"><span class="pub-left"><span class="grey">CMS Collaboration</span></span><span class="pub-right"><a href="https://cds.cern.ch/record/2967864?ln=en">CMS-PAS-MLG-25-001</a></span></div>
   </li>

   <li>
      <div class="pub-row"><span class="pub-left">Performance of the ATLAS Tau Trigger in Run 3 and Future Prospects</span><span class="pub-right"><em>under review</em></span></div>
      <div class="pub-row"><span class="pub-left"><span class="grey">ATLAS Collaboration</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2611.16454">arXiv:2611.16454</a></span></div>
   </li>
</ol>

<div class="pub-year">2025</div>
<ol class="rev-ol" reversed start="7" markdown="1">
   <li>
      <div class="pub-row"><span class="pub-left">SparsePixels: Efficient Convolution for Sparse Data on FPGAs</span><span class="pub-right"><a href="https://iopscience.iop.org/article/10.1088/2632-2153/ae9fb5"><em>Mach. Learn.: Sci. Technol.</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><strong><u>Ho Fung Tsoi</u></strong><span class="grey">, Dylan Rankin, Vladimir Loncar, Philip Harris</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2512.06208">arXiv:2512.06208</a></span></div>
   </li>

   <li>
      <div class="pub-row"><span class="pub-left">hls4ml: A Flexible, Open-Source Platform for Deep Learning Acceleration on Reconfigurable Hardware</span><span class="pub-right"><a href="https://doi.org/10.1145/3801979"><em>ACM Trans. Reconf. Tech. Syst.</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><span class="grey">Jan-Frederik Schulte et al.</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2512.01463">arXiv:2512.01463</a></span></div>
   </li>
</ol>

<div class="pub-year">2024</div>
<ol class="rev-ol" reversed start="5" markdown="1">
   <li>
      <div class="pub-row"><span class="pub-left">SymbolFit: Automatic Parametric Modeling with Symbolic Regression</span><span class="pub-right"><a href="https://link.springer.com/article/10.1007/s41781-025-00140-9"><em>Comput Softw Big Sci</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><strong><u>Ho Fung Tsoi</u></strong><span class="grey">, Dylan Rankin, Cecile Caillol, Miles Cranmer, Sridhara Dasu, Javier Duarte, Philip Harris, Elliot Lipeles, Vladimir Loncar</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2411.09851">arXiv:2411.09851</a></span></div>
   </li>

   <li>
      <div class="pub-row"><span class="pub-left">SymbolNet: Neural Symbolic Regression with Adaptive Dynamic Pruning for Compression</span><span class="pub-right"><a href="https://iopscience.iop.org/article/10.1088/2632-2153/adaad8"><em>Mach. Learn.: Sci. Technol.</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><strong><u>Ho Fung Tsoi</u></strong><span class="grey">, Vladimir Loncar, Sridhara Dasu, Philip Harris</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2401.09949">arXiv:2401.09949</a></span></div>
   </li>

   <li>
      <div class="pub-row"><span class="pub-left">Search for Exotic Decays of the Higgs Boson to a Pair of Pseudoscalars in the \(\mu\mu\)bb and \(\tau\tau\)bb Final States</span><span class="pub-right"><a href="https://link.springer.com/article/10.1140/epjc/s10052-024-12727-4"><em>Eur. Phys. J. C</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><span class="grey">CMS Collaboration</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2402.13358">arXiv:2402.13358</a></span></div>
   </li>
</ol>

<div class="pub-year">2023</div>
<ol class="rev-ol" reversed start="2" markdown="1">
   <li>
      <div class="pub-row"><span class="pub-left">Symbolic Regression on FPGAs for Fast Machine Learning Inference</span><span class="pub-right"><a href="https://doi.org/10.1051/epjconf/202429509036"><em>CHEP 2023</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><strong><u>Ho Fung Tsoi</u></strong><span class="grey">, Adrian Alan Pol, Vladimir Loncar, Ekaterina Govorkova, Miles Cranmer, Sridhara Dasu, Peter Elmer, Philip Harris, Isobel Ojalvo, Maurizio Pierini</span></span><span class="pub-right"><a href="https://arxiv.org/abs/2305.04099">arXiv:2305.04099</a></span></div>
   </li>
</ol>

<div class="pub-year">2021</div>
<ol class="rev-ol" reversed start="1" markdown="1">
   <li>
      <div class="pub-row"><span class="pub-left">The Phase-2 Upgrade of the CMS Data Acquisition and High Level Trigger</span><span class="pub-right"><a href="https://cds.cern.ch/record/2759072"><em>CMS Technical Design Report</em></a></span></div>
      <div class="pub-row"><span class="pub-left"><span class="grey">CMS Collaboration</span></span></div>
   </li>
</ol>
