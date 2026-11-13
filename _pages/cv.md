---
layout: single
title: "Curriculum Vitae"
description: "Ho Fung Tsoi's CV"
seo_title: "Ho Fung Tsoi · CV"
permalink: /cv/
author_profile: false
---

<style>
@media (min-width: 900px) {
  #main {
    max-width: 1100px;
  }

  .page {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>


<embed src="/files/HoFungTsoiCV.pdf" type="application/pdf" width="70%" height="700px" />

<br>

<p>
  <a href="/files/HoFungTsoiCV.pdf" target="_blank">
    CV<span id="cv-updated"></span>
  </a>
</p>

<script>
  // Show the month/year of the last commit that changed the CV PDF.
  fetch("https://api.github.com/repos/{{ site.repository }}/commits?path=files/HoFungTsoiCV.pdf&per_page=1")
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(commits => {
      if (!commits.length) return;
      const d = new Date(commits[0].commit.committer.date);
      const label = d.toLocaleString("en-US", { month: "short", year: "numeric" });
      document.getElementById("cv-updated").textContent = ` [updated ${label}]`;
    })
    .catch(() => {});
</script>