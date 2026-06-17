'use strict';

// ── LAYERS ────────────────────────────────────────────────────────────────────
const LAYERS = [
  { id: 's', label: 'Study',  color: '#60a5fa' },
  { id: 'r', label: 'Revise', color: '#22d3ee' },
  { id: 't', label: 'Test',   color: '#818cf8' },
];

// ── SUBJECTS + CLASS IX NCERT DATA ────────────────────────────────────────────
const SUBJECTS = [
  {
    id: 'science', label: 'Science', emoji: '🔬', accent: '#38bdf8', cls: 'sc',
    chapters: [
      { name: 'Ch 1: Exploration', topics: ['Entering the World of Secondary Science'] },
      { name: 'Ch 2: Cell — The Building Block of Life', topics: ['The Building Block of Life'] },
      { name: 'Ch 3: Tissues in Action', topics: ['Tissues in Action'] },
      { name: 'Ch 4: Describing Motion Around Us', topics: ['Describing Motion Around Us'] },
      { name: 'Ch 5: Exploring Mixtures & Separation', topics: ['Exploring Mixtures and their Separation'] },
      { name: 'Ch 6: How Forces Affect Motion', topics: ['6.1 The Concept of Force'] },
      { name: 'Ch 7: Work, Energy & Simple Machines', topics: ['Work, Energy, and Simple Machines'] },
      { name: 'Ch 8: Journey Inside the Atom', topics: [
        '8.7.1 Building up atoms',
        '8.9 A Deeper Look into Atomic Structure',
        '8.9.1 Isotopes',
      ]},
      { name: 'Ch 9: Atomic Foundations of Matter', topics: [
        '9.5 Writing Chemical Formulae',
        '9.5.1 Chemical formulae of covalent compounds',
      ]},
      { name: 'Ch 10: Sound Waves', topics: ['Sound Waves: Characteristics and Applications'] },
      { name: 'Ch 11: Reproduction', topics: ['11.3 Sexual Reproduction in Animals'] },
      { name: 'Ch 12: Diversity and Classification', topics: ['Rules for writing scientific names'] },
      { name: 'Ch 13: Earth as a System', topics: ['13.3.1 Water cycle', '13.3.2 Carbon cycle'] },
    ],
  },
  {
    id: 'social', label: 'Social', emoji: '🌍', accent: '#6366f1', cls: 'so',
    chapters: [
      // ── Geography ──────────────────────────────────────────────────────────
      { sec: '🗺️ Geography', name: 'Ch 1: India – Size and Location', topics: ['Location', 'Size', 'India and the World', "India's Neighbours"] },
      { sec: '🗺️ Geography', name: 'Ch 2: Physical Features of India', topics: ['The Himalayan Mountains', 'The Northern Plains', 'The Peninsular Plateau', 'The Indian Desert', 'The Coastal Plains', 'The Islands'] },
      { sec: '🗺️ Geography', name: 'Ch 3: Drainage', topics: ['Drainage Systems in India', 'The Indus River System', 'The Ganga River System', 'The Brahmaputra River System', 'The Narmada Basin', 'The Tapi Basin', 'The Godavari Basin', 'The Mahanadi Basin', 'The Krishna Basin', 'The Kaveri Basin', 'Lakes', 'Role of Rivers in the Economy', 'River Pollution'] },
      { sec: '🗺️ Geography', name: 'Ch 4: Climate', topics: ['Latitude', 'Altitude', 'Pressure and Winds', 'Cold Weather Season (Winter)', 'Hot Weather Season (Summer)', 'Advancing Monsoon (Rainy Season)', 'Retreating / Post Monsoons', 'Distribution of Rainfall', 'Monsoon as a Unifying Bond'] },
      { sec: '🗺️ Geography', name: 'Ch 5: Natural Vegetation and Wildlife', topics: ['Tropical Evergreen Forests', 'Tropical Deciduous Forests', 'Thorn Forests and Scrubs', 'Montane Forests', 'Mangrove Forests', 'Wildlife', 'Medicinal Plants'] },
      { sec: '🗺️ Geography', name: 'Ch 6: Population', topics: ['Population Size and Distribution by Numbers', 'Population Distribution by Density', 'Population Growth', 'Processes of Population Change', 'Adolescent Population', 'National Population Policy'] },
      // ── Political Science ──────────────────────────────────────────────────
      { sec: '🏛️ Political Science', name: 'Ch 1: What is Democracy? Why Democracy?', topics: ['A simple definition', 'Why define democracy?', 'Major decisions by elected leaders', 'Free and fair electoral competition', 'One person, one vote, one value', 'Rule of law and respect for rights', 'Summary definition', 'Debating merits of democracy', 'Arguments against democracy', 'Arguments for democracy', 'Broader Meanings of Democracy'] },
      { sec: '🏛️ Political Science', name: 'Ch 2: Constitutional Design', topics: ['Struggle against apartheid', 'Towards a new constitution', 'Why do we need a constitution?', 'The path to Constitution', 'The Constituent Assembly', 'The Dream and the Promise', 'Philosophy of the Constitution', 'Institutional design'] },
      { sec: '🏛️ Political Science', name: 'Ch 3: Electoral Politics', topics: ['Assembly Election in Haryana', 'Why do we need elections?', 'What makes an election democratic?', 'Political competition — good or bad?', 'Electoral constituencies', 'Reserved Constituencies', "Voters' list", 'Nomination of candidates', 'Election Campaign', 'Polling and counting of votes', 'Independent Election Commission', 'Popular participation', 'Acceptance of election outcome', 'Challenges to free and fair elections'] },
      { sec: '🏛️ Political Science', name: 'Ch 4: Working of Institutions', topics: ['A Government Order', 'The Decision Makers', 'Need for Political Institutions', 'Why do we need a Parliament?', 'Two Houses of Parliament', 'Political and Permanent Executive', 'Prime Minister and Council of Ministers', 'Powers of the Prime Minister', 'The President', 'The Presidential System', 'The Judiciary'] },
      { sec: '🏛️ Political Science', name: 'Ch 5: Democratic Rights', topics: ['Prison in Guantanamo Bay', "Citizens' Rights in Saudi Arabia", 'Ethnic massacre in Kosovo', 'What are rights?', 'Why do we need rights in a democracy?', 'Right to Equality', 'Right to Freedom', 'Right against Exploitation', 'Right to Freedom of Religion', 'Cultural and Educational Rights', 'How can we secure these rights?', 'National Human Rights Commission'] },
      // ── Economics ──────────────────────────────────────────────────────────
      { sec: '💰 Economics', name: 'Ch 1: The Story of Village Palampur', topics: ['Organisation of Production', 'Land is fixed', 'Growing more from the same land', 'Will the land sustain?', 'How is land distributed between farmers?', 'Who will provide the labour?', 'The capital needed in farming', 'Sale of Surplus Farm Products', 'Dairy', 'Small-scale manufacturing in Palampur', 'The shopkeepers of Palampur', 'Transport: a fast developing sector'] },
      { sec: '💰 Economics', name: 'Ch 2: People as Resource', topics: ['Overview (Human Capital Formation)', 'Story of Sakal', 'Story of Vilas', 'Economic Activities by Men and Women', 'Education', 'Health', 'Unemployment', 'Story of a Village'] },
      { sec: '💰 Economics', name: 'Ch 3: Poverty as a Challenge', topics: ['Urban Case', 'Rural case', 'Social Exclusion', 'Vulnerability', 'Poverty Line', 'Poverty Estimates', 'Inter-State Disparities', 'Vulnerable Groups', 'Global Poverty Scenario', 'Causes of Poverty', 'Anti-Poverty Measures', 'The Challenges Ahead'] },
      { sec: '💰 Economics', name: 'Ch 4: Food Security in India', topics: ['What is food security?', 'Why food security?', 'Story of Ramu', 'Story of Ahmad', 'Food Security in India (Self-sufficiency)', 'What is Buffer stock?', 'Public Distribution System (PDS)', 'Current Status of the PDS', 'Role of cooperatives in food security'] },
      // ── History ────────────────────────────────────────────────────────────
      { sec: '📜 History', name: 'Ch I: The French Revolution', topics: ['The Struggle to Survive', 'A Growing Middle Class Envisages an End to Privileges', 'France Becomes a Constitutional Monarchy', 'The Reign of Terror', 'A Directory Rules France', 'Did Women have a Revolution?', 'The Abolition of Slavery', 'The Revolution and Everyday Life'] },
      { sec: '📜 History', name: 'Ch II: Socialism in Europe and the Russian Revolution', topics: ['Liberals, Radicals and Conservatives', 'Industrial Society and Social Change', 'The Coming of Socialism to Europe', 'Support for Socialism', 'The Russian Empire in 1914', 'Economy and Society', 'Socialism in Russia', 'A Turbulent Time: The 1905 Revolution', 'The First World War and the Russian Empire', 'After February', 'The Revolution of October 1917', 'The Civil War', 'Making a Socialist Society', 'Stalinism and Collectivisation', 'Global Influence of the Russian Revolution'] },
      { sec: '📜 History', name: 'Ch III: Nazism and the Rise of Hitler', topics: ['The Effects of the War', 'Political Radicalism and Economic Crises', 'The Years of Depression', 'The Destruction of Democracy', 'Reconstruction', 'Establishment of the Racial State', 'The Racial Utopia', 'Stage 1: Exclusion 1933–1939', 'Stage 2: Ghettoisation 1940–1944', 'Stage 3: Annihilation 1941 onwards', 'The Nazi Cult of Motherhood', 'The Art of Propaganda', 'Knowledge about the Holocaust'] },
      { sec: '📜 History', name: 'Ch IV: Forest Society and Colonialism', topics: ['Land to be Improved', 'Sleepers on the Tracks', 'Plantations', 'How were the Lives of People Affected?', 'How did Forest Rules Affect Cultivation?', 'Who could Hunt?', 'New Trades, New Employments and New Services', 'The People of Bastar', 'The Fears of the People', 'The Woodcutters of Java', 'Dutch Scientific Forestry', "Samin's Challenge", 'War and Deforestation', 'New Developments in Forestry'] },
      { sec: '📜 History', name: 'Ch V: Pastoralists in the Modern World', topics: ['In the Mountains', 'On the Plateaus, Plains and Deserts', 'How Did these Changes Affect the Lives of Pastoralists?', 'How Did the Pastoralists Cope with these Changes?', 'Where have the Grazing Lands Gone?', 'The Borders are Closed', 'When Pastures Dry', 'Not All were Equally Affected'] },
    ],
  },
  {
    id: 'math', label: 'Math', emoji: '📐', accent: '#06b6d4', cls: 'ma',
    chapters: [
      { name: '1. Number Systems', topics: ['1.1 Introduction', '1.2 Irrational Numbers', '1.3 Real Numbers and their Decimal Expansions', '1.4 Operations on Real Numbers', '1.5 Laws of Exponents for Real Numbers', '1.6 Summary'] },
      { name: '2. Polynomials', topics: ['2.1 Introduction', '2.2 Polynomials in One Variable', '2.3 Zeroes of a Polynomial', '2.4 Factorisation of Polynomials', '2.5 Algebraic Identities', '2.6 Summary'] },
      { name: '3. Coordinate Geometry', topics: ['3.1 Introduction', '3.2 Cartesian System', '3.3 Summary'] },
      { name: '4. Linear Equations in Two Variables', topics: ['4.1 Introduction', '4.2 Linear Equations', '4.3 Solution of a Linear Equation', '4.4 Summary'] },
      { name: "5. Introduction to Euclid's Geometry", topics: ['5.1 Introduction', "5.2 Euclid's Definitions, Axioms and Postulates", '5.3 Summary'] },
      { name: '6. Lines and Angles', topics: ['6.1 Introduction', '6.2 Basic Terms and Definitions', '6.3 Intersecting Lines and Non-intersecting Lines', '6.4 Pairs of Angles', '6.5 Lines Parallel to the Same Line', '6.6 Summary'] },
      { name: '7. Triangles', topics: ['7.1 Introduction', '7.2 Congruence of Triangles', '7.3 Criteria for Congruence of Triangles', '7.4 Some Properties of a Triangle', '7.5 Some More Criteria for Congruence of Triangles', '7.6 Summary'] },
      { name: '8. Quadrilaterals', topics: ['8.1 Properties of a Parallelogram', '8.2 The Mid-point Theorem', '8.3 Summary'] },
      { name: '9. Circles', topics: ['9.1 Angle Subtended by a Chord at a Point', '9.2 Perpendicular from the Centre to a Chord', '9.3 Equal Chords and their Distances from the Centre', '9.4 Angle Subtended by an Arc of a Circle', '9.5 Cyclic Quadrilaterals', '9.6 Summary'] },
      { name: "10. Heron's Formula", topics: ["10.1 Area of a Triangle by Heron's Formula", '10.2 Summary'] },
      { name: '11. Surface Areas and Volumes', topics: ['11.1 Surface Area of a Right Circular Cone', '11.2 Surface Area of a Sphere', '11.3 Volume of a Right Circular Cone', '11.4 Volume of a Sphere', '11.5 Summary'] },
      { name: '12. Statistics', topics: ['12.1 Graphical Representation of Data', '12.2 Summary'] },
      { name: 'Appendix 1: Proofs in Mathematics', topics: ['A1.1 Introduction', 'A1.2 Mathematically Acceptable Statements', 'A1.3 Deductive Reasoning', 'A1.4 Theorems, Conjectures and Axioms', 'A1.5 What is a Mathematical Proof?', 'A1.6 Summary'] },
      { name: 'Appendix 2: Mathematical Modelling', topics: ['A2.1 Introduction', 'A2.2 Review of Word Problems', 'A2.3 Some Mathematical Models', 'A2.4 The Process of Modelling, its Advantages and Limitations', 'A2.5 Summary'] },
    ],
  },
];

// ── STATE ─────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'ncert_ix_v1';
let state = {};
let openChapters = {};
let currentSubject = 'science';

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) state = JSON.parse(saved);
  } catch (e) {}
  SUBJECTS.forEach(s => s.chapters.forEach((ch, ci) =>
    ch.topics.forEach((_, ti) => LAYERS.forEach(l => {
      const k = `${s.id}-${ci}-${ti}-${l.id}`;
      if (state[k] === undefined) state[k] = false;
    }))
  ));
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

// ── PROGRESS ──────────────────────────────────────────────────────────────────
function pct(done, total) { return total === 0 ? 0 : Math.round(done / total * 100); }

function chapterProgress(sid, ci, lid) {
  const ch = SUBJECTS.find(s => s.id === sid).chapters[ci];
  let done = 0;
  ch.topics.forEach((_, ti) => { if (state[`${sid}-${ci}-${ti}-${lid}`]) done++; });
  return { done, total: ch.topics.length, pct: pct(done, ch.topics.length) };
}

function subjectProgress(sid, lid) {
  const subj = SUBJECTS.find(s => s.id === sid);
  let done = 0, total = 0;
  subj.chapters.forEach((ch, ci) => ch.topics.forEach((_, ti) => {
    total++;
    if (state[`${sid}-${ci}-${ti}-${lid}`]) done++;
  }));
  return { done, total, pct: pct(done, total) };
}

function allProgress(lid) {
  let done = 0, total = 0;
  SUBJECTS.forEach(s => { const p = subjectProgress(s.id, lid); done += p.done; total += p.total; });
  return { done, total, pct: pct(done, total) };
}

function totalTopics() {
  return SUBJECTS.reduce((a, s) => a + s.chapters.reduce((b, ch) => b + ch.topics.length, 0), 0);
}

function countDone(lid) {
  let n = 0;
  SUBJECTS.forEach(s => s.chapters.forEach((ch, ci) =>
    ch.topics.forEach((_, ti) => { if (state[`${s.id}-${ci}-${ti}-${lid}`]) n++; })
  ));
  return n;
}

function chapsDone(lid) {
  let n = 0;
  SUBJECTS.forEach(s => s.chapters.forEach((ch, ci) => {
    if (ch.topics.every((_, ti) => state[`${s.id}-${ci}-${ti}-${lid}`])) n++;
  }));
  return n;
}

function readyToTest() {
  let n = 0;
  SUBJECTS.forEach(s => s.chapters.forEach((ch, ci) => {
    if (ch.topics.every((_, ti) =>
      state[`${s.id}-${ci}-${ti}-s`] && state[`${s.id}-${ci}-${ti}-r`]
    )) n++;
  }));
  return n;
}

function bestSubject(lid) {
  let best = null, bestPct = -1;
  SUBJECTS.forEach(s => {
    const p = subjectProgress(s.id, lid);
    if (p.pct > bestPct) { bestPct = p.pct; best = s; }
  });
  return best ? `${best.emoji} ${best.label}` : '—';
}

// ── SVG ARC ───────────────────────────────────────────────────────────────────
function ringArc(r, percentage, color, id) {
  const circ   = +(2 * Math.PI * r).toFixed(2);
  const dash   = +(circ * Math.min(percentage, 100) / 100).toFixed(2);
  const gap    = +(circ - dash).toFixed(2);
  const offset = +(circ * 0.25).toFixed(2);
  return `<circle cx="50" cy="50" r="${r}" fill="none" stroke="rgba(96,165,250,0.08)" stroke-width="7"/>
<circle id="${id}" cx="50" cy="50" r="${r}" fill="none" stroke="${color}" stroke-width="7"
  stroke-dasharray="${dash} ${gap}" stroke-dashoffset="${offset}" stroke-linecap="round"
  style="transition:stroke-dasharray 0.4s ease"/>`;
}

// ── RENDER RINGS ──────────────────────────────────────────────────────────────
function renderRings() {
  const sec = document.querySelector('.rings-section');
  if (!sec) return;
  let html = '<p class="rings-label">Subject Overview</p><div class="rings-grid">';
  SUBJECTS.forEach(s => {
    const ps = subjectProgress(s.id, 's').pct;
    const pr = subjectProgress(s.id, 'r').pct;
    const pt = subjectProgress(s.id, 't').pct;
    const avg = Math.round((ps + pr + pt) / 3);
    html += `<div class="ring-card ${s.cls}">
      <div class="ring-wrap">
        <svg viewBox="0 0 100 100" width="90" height="90">
          ${ringArc(42, ps, '#60a5fa', `ring-s-${s.id}`)}
          ${ringArc(32, pr, '#22d3ee', `ring-r-${s.id}`)}
          ${ringArc(22, pt, '#818cf8', `ring-t-${s.id}`)}
        </svg>
        <div class="ring-center">
          <span class="ring-center-pct" id="ring-avg-${s.id}" style="color:${s.accent}">${avg}%</span>
          <span class="ring-center-label">avg</span>
        </div>
      </div>
      <div class="ring-subject-name">${s.emoji} ${s.label}</div>
      <div class="ring-srt-row">
        <div class="ring-chip" style="background:rgba(96,165,250,.13)">
          <span style="color:#60a5fa">S</span>
          <span id="ring-chip-s-${s.id}" style="color:#60a5fa">${ps}%</span>
        </div>
        <div class="ring-chip" style="background:rgba(34,211,238,.13)">
          <span style="color:#22d3ee">R</span>
          <span id="ring-chip-r-${s.id}" style="color:#22d3ee">${pr}%</span>
        </div>
        <div class="ring-chip" style="background:rgba(129,140,248,.13)">
          <span style="color:#818cf8">T</span>
          <span id="ring-chip-t-${s.id}" style="color:#818cf8">${pt}%</span>
        </div>
      </div>
    </div>`;
  });
  html += '</div>';
  sec.innerHTML = html;
}

// ── RENDER STATS ──────────────────────────────────────────────────────────────
function renderStats() {
  const sec = document.querySelector('.stats-section');
  if (!sec) return;
  const tot = totalTopics();
  const tchaps = SUBJECTS.reduce((a, s) => a + s.chapters.length, 0);
  sec.innerHTML = `<div class="stats-scroll">
    <div class="stat-card"><span class="stat-icon">📘</span><div class="stat-value" id="stat-s" style="color:#60a5fa">${countDone('s')}</div><div class="stat-label">Studied</div><div class="stat-sub">of ${tot} topics</div></div>
    <div class="stat-card"><span class="stat-icon">🔄</span><div class="stat-value" id="stat-r" style="color:#22d3ee">${countDone('r')}</div><div class="stat-label">Revised</div><div class="stat-sub">of ${tot} topics</div></div>
    <div class="stat-card"><span class="stat-icon">✅</span><div class="stat-value" id="stat-t" style="color:#818cf8">${countDone('t')}</div><div class="stat-label">Tested</div><div class="stat-sub">of ${tot} topics</div></div>
    <div class="stat-card"><span class="stat-icon">🏁</span><div class="stat-value" id="stat-cd" style="color:#60a5fa">${chapsDone('s')}</div><div class="stat-label">Chaps Done</div><div class="stat-sub">100% studied</div></div>
    <div class="stat-card"><span class="stat-icon">🎯</span><div class="stat-value" id="stat-rtt" style="color:#22d3ee">${readyToTest()}</div><div class="stat-label">Test-ready</div><div class="stat-sub">S+R complete</div></div>
    <div class="stat-card"><span class="stat-icon">🧩</span><div class="stat-value" style="font-size:16px;margin-top:4px">${tchaps}</div><div class="stat-label">Chapters</div><div class="stat-sub">${tot} topics</div></div>
    <div class="stat-card"><span class="stat-icon">🏆</span><div class="stat-value" id="stat-best" style="font-size:13px;margin-top:4px">${bestSubject('t')}</div><div class="stat-label">Best (tests)</div><div class="stat-sub">highest %</div></div>
  </div>`;
}

// ── RENDER OVERALL BARS ───────────────────────────────────────────────────────
function renderOverall() {
  const sec = document.querySelector('.overall-section');
  if (!sec) return;
  const tot = totalTopics();
  let html = `<div class="overall-card">
    <div class="overall-header">
      <span class="overall-title">Overall Progress</span>
      <span class="overall-total">${tot} topics total</span>
    </div>`;
  LAYERS.forEach(l => {
    const p = allProgress(l.id);
    html += `<div class="overall-row">
      <span class="overall-lbl" style="color:${l.color}">${l.label}</span>
      <div class="bar-track"><div class="bar-fill" id="obar-${l.id}" style="width:${p.pct}%;background:${l.color}"></div></div>
      <span class="overall-pct" id="opct-${l.id}" style="color:${l.color}">${p.pct}%</span>
      <span class="overall-count" id="ocnt-${l.id}">${p.done}/${p.total}</span>
    </div>`;
  });
  html += '</div>';
  sec.innerHTML = html;
}

// ── RENDER BOTTOM NAV ─────────────────────────────────────────────────────────
function renderNav() {
  const nav = document.getElementById('bottom-nav');
  if (!nav) return;
  nav.innerHTML = SUBJECTS.map(s => `
    <button class="nav-item ${s.id === currentSubject ? 'active' : ''}"
      onclick="switchSubject('${s.id}')"
      style="${s.id === currentSubject ? 'color:' + s.accent : ''}">
      <span class="nav-emoji">${s.emoji}</span>
      <span class="nav-label" style="${s.id === currentSubject ? 'color:' + s.accent : ''}">${s.label}</span>
      <div class="nav-dot" style="background:${s.accent}"></div>
    </button>`).join('');
}

// ── RENDER CHAPTERS ───────────────────────────────────────────────────────────
function renderChapters() {
  const sec = document.querySelector('.chapters-section');
  if (!sec) return;
  const subj = SUBJECTS.find(s => s.id === currentSubject);

  let html = `<div class="section-row">
    <span class="section-title">${subj.emoji} ${subj.label} Chapters</span>
    <span class="section-count">${subj.chapters.length} chapters</span>
  </div>
  <div class="legend-row">
    ${LAYERS.map(l => `<div class="legend-pill"><div class="legend-dot" style="background:${l.color}"></div>${l.label}</div>`).join('')}
    <div class="legend-pill" style="color:var(--text3)">tap S / R / T to toggle</div>
  </div>`;

  let lastSec = null;
  subj.chapters.forEach((ch, ci) => {
    // Section header (Social only)
    if (ch.sec && ch.sec !== lastSec) {
      html += `<div class="sec-divider">${ch.sec}</div>`;
      lastSec = ch.sec;
    }

    const isOpen = openChapters[`${currentSubject}-${ci}`];
    const ps = chapterProgress(currentSubject, ci, 's');
    const pr = chapterProgress(currentSubject, ci, 'r');
    const pt = chapterProgress(currentSubject, ci, 't');
    const allDone = ps.pct === 100 && pr.pct === 100 && pt.pct === 100;

    html += `<div class="chapter-card ${isOpen ? 'open' : ''}">
      <div class="chapter-header" onclick="toggleChapter('${currentSubject}', ${ci})">
        <div class="chapter-num-badge" style="${isOpen ? `background:${subj.accent}18;color:${subj.accent}` : ''}">${ci + 1}</div>
        <div class="chapter-info">
          <div class="chapter-name">${ch.name}</div>
          <div class="chapter-srt">
            <div class="ch-chip">
              <div class="ch-chip-dot" style="background:#60a5fa"></div>
              <span style="color:#60a5fa;font-size:9px;font-weight:700">S</span>
              <span class="ch-chip-pct" id="cp-${currentSubject}-${ci}-s" style="color:${ps.pct === 100 ? '#60a5fa' : 'var(--text3)'}">${ps.pct}%</span>
            </div>
            <div class="ch-chip">
              <div class="ch-chip-dot" style="background:#22d3ee"></div>
              <span style="color:#22d3ee;font-size:9px;font-weight:700">R</span>
              <span class="ch-chip-pct" id="cp-${currentSubject}-${ci}-r" style="color:${pr.pct === 100 ? '#22d3ee' : 'var(--text3)'}">${pr.pct}%</span>
            </div>
            <div class="ch-chip">
              <div class="ch-chip-dot" style="background:#818cf8"></div>
              <span style="color:#818cf8;font-size:9px;font-weight:700">T</span>
              <span class="ch-chip-pct" id="cp-${currentSubject}-${ci}-t" style="color:${pt.pct === 100 ? '#818cf8' : 'var(--text3)'}">${pt.pct}%</span>
            </div>
            ${allDone ? '<span class="chapter-done-badge">✓ Done</span>' : ''}
          </div>
        </div>
        <svg class="ch-chevron ${isOpen ? 'open' : ''}" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>`;

    if (isOpen) {
      html += `<div class="topics-wrap open">
        <div class="topics-col-hdr">
          <div class="topics-col-hdr-space"></div>
          <div class="col-hdr-labels">
            ${LAYERS.map(l => `<div class="col-hdr-lbl" style="color:${l.color}">${l.label}</div>`).join('')}
          </div>
        </div>`;
      ch.topics.forEach((topic, ti) => {
        html += `<div class="topic-row">
          <span class="topic-name">${topic}</span>
          <div class="toggle-group">`;
        LAYERS.forEach(l => {
          const k = `${currentSubject}-${ci}-${ti}-${l.id}`;
          html += `<button class="toggle-btn ${state[k] ? 'on-' + l.id : ''}"
            onclick="toggleTopic(event,'${k}','${currentSubject}',${ci},'${l.id}')">${l.label[0]}</button>`;
        });
        html += `</div></div>`;
      });
      html += `</div>`;
    } else {
      html += `<div class="topics-wrap"></div>`;
    }
    html += `</div>`;
  });

  sec.innerHTML = html;
}

// ── TOGGLE TOPIC (surgical DOM update) ───────────────────────────────────────
function toggleTopic(event, key, sid, ci, lid) {
  state[key] = !state[key];
  saveState();

  // Button
  event.currentTarget.className = `toggle-btn ${state[key] ? 'on-' + lid : ''}`;

  // Chapter chips
  LAYERS.forEach(l => {
    const p = chapterProgress(sid, +ci, l.id);
    const chip = document.getElementById(`cp-${sid}-${ci}-${l.id}`);
    if (chip) { chip.textContent = p.pct + '%'; chip.style.color = p.pct === 100 ? l.color : 'var(--text3)'; }
  });

  // All subject rings + chips
  SUBJECTS.forEach(s => {
    LAYERS.forEach(l => {
      const p   = subjectProgress(s.id, l.id);
      const r   = l.id === 's' ? 42 : l.id === 'r' ? 32 : 22;
      const C   = +(2 * Math.PI * r).toFixed(2);
      const d   = +(C * p.pct / 100).toFixed(2);
      const g   = +(C - d).toFixed(2);
      const arc = document.getElementById(`ring-${l.id}-${s.id}`);
      if (arc) arc.setAttribute('stroke-dasharray', `${d} ${g}`);
      const chip = document.getElementById(`ring-chip-${l.id}-${s.id}`);
      if (chip) chip.textContent = p.pct + '%';
    });
    const ps = subjectProgress(s.id, 's').pct;
    const pr = subjectProgress(s.id, 'r').pct;
    const pt = subjectProgress(s.id, 't').pct;
    const avg = document.getElementById(`ring-avg-${s.id}`);
    if (avg) avg.textContent = Math.round((ps + pr + pt) / 3) + '%';
  });

  // Overall bars
  LAYERS.forEach(l => {
    const p = allProgress(l.id);
    const bar = document.getElementById(`obar-${l.id}`);
    const pp  = document.getElementById(`opct-${l.id}`);
    const cc  = document.getElementById(`ocnt-${l.id}`);
    if (bar) bar.style.width = p.pct + '%';
    if (pp)  pp.textContent  = p.pct + '%';
    if (cc)  cc.textContent  = p.done + '/' + p.total;
  });

  // Stat counts
  ['s', 'r', 't'].forEach(l => {
    const el = document.getElementById(`stat-${l}`);
    if (el) el.textContent = countDone(l);
  });
  const cd   = document.getElementById('stat-cd');   if (cd)   cd.textContent   = chapsDone('s');
  const rtt  = document.getElementById('stat-rtt');  if (rtt)  rtt.textContent  = readyToTest();
  const best = document.getElementById('stat-best'); if (best) best.textContent = bestSubject('t');
}

// ── TOGGLE CHAPTER ────────────────────────────────────────────────────────────
function toggleChapter(sid, ci) {
  openChapters[`${sid}-${ci}`] = !openChapters[`${sid}-${ci}`];
  renderChapters();
}

// ── SWITCH SUBJECT ────────────────────────────────────────────────────────────
function switchSubject(id) {
  currentSubject = id;
  renderNav();
  renderChapters();
}

// ── INIT ──────────────────────────────────────────────────────────────────────
function init() {
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  document.getElementById('app').innerHTML = `
    <div class="header">
      <div class="header-top">
        <span class="app-title">Class IX · NCERT</span>
        <span class="header-date">${today}</span>
      </div>
      <div class="header-headline">SUDHANVA<br>SUBJECT TRACKER</div>
    </div>
    <div class="rings-section"></div>
    <div class="stats-section"></div>
    <div class="overall-section"></div>
    <div class="chapters-section"></div>`;

  renderRings();
  renderStats();
  renderOverall();
  renderNav();
  renderChapters();
}

loadState();
init();
