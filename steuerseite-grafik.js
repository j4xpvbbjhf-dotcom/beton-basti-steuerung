// Pixel- und Low-Poly-Grafiken für die Steuerseite. Alles als SVG, ohne externe Bilddateien.
(function () {
  const h = (...a) => window.React.createElement(...a);

  const ICONS = {
    grid: ['KKK.KKK.', 'KKK.KKK.', 'KKK.KKK.', '........', 'KKK.KKK.', 'KKK.KKK.', 'KKK.KKK.', '........'],
    house: ['...KK...', '..KKKK..', '.KKKKKK.', 'KKKKKKKK', '.K....K.', '.K.KK.K.', '.K.KK.K.', '.KKKKKK.'],
    pin: ['..KKKK..', '.KKKKKK.', 'KKK..KKK', 'KKK..KKK', '.KKKKKK.', '..KKKK..', '...KK...', '...KK...'],
    screen: ['KKKKKKKK', 'K......K', 'K.K..K.K', 'K......K', 'K......K', 'KKKKKKKK', '...KK...', '.KKKKKK.'],
    msg: ['KKKKKKKK', 'K......K', 'K.KKKK.K', 'K......K', 'K.KKK..K', 'KKKKKKKK', '.KK.....', 'K.......'],
    ruler: ['........', 'KKKKKKKK', 'K.K.K.KK', 'K.K.K.KK', 'K......K', 'KKKKKKKK', '........', '........'],
    coin: ['..KKKK..', '.K....K.', 'K..KKK.K', 'K.K....K', 'K..KKK.K', '.K....K.', '..KKKK..', '........'],
    gear: ['...KK...', '.K.KK.K.', '..KKKK..', 'KKK..KKK', 'KKK..KKK', '..KKKK..', '.K.KK.K.', '...KK...'],
    chart: ['......KK', '......KK', '...KK.KK', '...KK.KK', 'KK.KK.KK', 'KK.KK.KK', 'KK.KK.KK', 'KKKKKKKK'],
    send: ['K.......', 'KKK.....', 'KKKKK...', 'KKKKKKKK', 'KKKKK...', 'KKK.....', 'K.......', '........'],
    star: ['...KK...', '...KK...', 'KKKKKKKK', '.KKKKKK.', '..KKKK..', '.KK..KK.', 'KK....KK', '........'],
    check: ['........', '......KK', '.....KK.', 'K...KK..', 'KK.KK...', '.KKK....', '..K.....', '........'],
    sun: ['...K....', '.K.K.K..', '..KKK...', 'KKKKKKK.', '..KKK...', '.K.K.K..', '...K....', '........'],
    moon: ['..KKK...', '.KK.....', 'KK......', 'KK......', 'KK......', '.KK...K.', '..KKKK..', '........'],
    plus: ['........', '...KK...', '...KK...', '.KKKKKK.', '.KKKKKK.', '...KK...', '...KK...', '........']
  };
  const pathOf = (rows, ch) => {
    let d = '';
    rows.forEach((r, y) => { for (let x = 0; x < r.length; x++) if (r[x] === ch) d += `M${x} ${y}h1v1h-1z`; });
    return d;
  };
  const iconCache = {};
  function icon(name, size) {
    const key = name + size;
    if (iconCache[key]) return iconCache[key];
    const rows = ICONS[name] || ICONS.grid;
    return (iconCache[key] = h('svg', { width: size, height: size, viewBox: '0 0 8 8', shapeRendering: 'crispEdges', style: { display: 'block', flex: 'none' }, 'aria-hidden': true },
      h('path', { d: pathOf(rows, 'K'), fill: 'currentColor' })));
  }

  const MASCOT = [
    '.....YYYYYY.....',
    '...YYYYYYYYYY...',
    '..YYYYYHYYYYYY..',
    '.KKKKKKKKKKKKKK.',
    '...SSSSSSSSSS...',
    '...SWKSSSSWKS...',
    '...SSSSSSSSSS...',
    '...SSSSNNSSSS...',
    '....SKKKKKKS....',
    '.....SSSSSS.....',
    '..AAAAYAAYAAAA..',
    '.SAAAAYAAYAAAAS.',
    '.SAAAAAAAAAAAAS.',
    '...AAAAAAAAAA...',
    '...AAAA..AAAA...',
    '..KKKKK..KKKKK..'
  ];
  const MCOL = { Y: '#f2b632', H: '#fbe08a', S: '#e9b58c', N: '#d1946a', K: '#1b231f', W: '#ffffff', A: '#2f5d50' };
  const mascotCache = {};
  function mascot(size) {
    if (mascotCache[size]) return mascotCache[size];
    return (mascotCache[size] = h('svg', { width: size, height: size, viewBox: '0 0 16 16', shapeRendering: 'crispEdges', style: { display: 'block', flex: 'none' }, 'aria-label': 'Beton-Basti' },
      Object.keys(MCOL).map(c => h('path', { key: c, d: pathOf(MASCOT, c), fill: MCOL[c] }))));
  }

  function flag(code, w, stil) {
    const hgt = Math.round(w * 2 / 3);
    const style = { display: 'block', flex: 'none', border: '1.5px solid var(--line)', borderRadius: stil === 'lowpoly' ? 3 : 0, background: '#fff' };
    const S = kids => h('svg', { width: w, height: hgt, viewBox: '0 0 30 20', preserveAspectRatio: 'none', shapeRendering: stil === 'retro' ? 'crispEdges' : 'auto', style, 'aria-label': 'Flagge ' + code }, kids);
    const R = (x, y, ww, hh, f, k) => h('rect', { key: k, x, y, width: ww, height: hh, fill: f });
    const Pg = (pts, f, k) => h('polygon', { key: k, points: pts, fill: f });
    switch (code) {
      case 'AT': return S([R(0, 0, 30, 20, '#c8102e', 1), R(0, 7, 30, 6, '#ffffff', 2)]);
      case 'DE': return S([R(0, 0, 30, 7, '#000000', 1), R(0, 7, 30, 6, '#dd0000', 2), R(0, 13, 30, 7, '#ffce00', 3)]);
      case 'IT': return S([R(0, 0, 10, 20, '#009246', 1), R(10, 0, 10, 20, '#ffffff', 2), R(20, 0, 10, 20, '#ce2b37', 3)]);
      case 'ZA': return S([R(0, 0, 30, 10, '#e03c31', 1), R(0, 10, 30, 10, '#001489', 2),
        Pg('0,0 5,0 15,6.6 30,6.6 30,13.4 15,13.4 5,20 0,20', '#ffffff', 3),
        Pg('0,0 3,0 14,8 30,8 30,12 14,12 3,20 0,20 0,17 10.5,10 0,3', '#007749', 4),
        Pg('0,3 10.5,10 0,17', '#ffb81c', 5), Pg('0,5.2 7.6,10 0,14.8', '#000000', 6)]);
      case 'CH': return S([R(0, 0, 30, 20, '#da291c', 1), R(13, 4, 4, 12, '#fff', 2), R(9, 8, 12, 4, '#fff', 3)]);
      case 'FR': return S([R(0, 0, 10, 20, '#002395', 1), R(10, 0, 10, 20, '#fff', 2), R(20, 0, 10, 20, '#ed2939', 3)]);
      case 'ES': return S([R(0, 0, 30, 20, '#aa151b', 1), R(0, 5, 30, 10, '#f1bf00', 2)]);
      case 'HR': return S([R(0, 0, 30, 7, '#ff0000', 1), R(0, 7, 30, 6, '#fff', 2), R(0, 13, 30, 7, '#171796', 3)]);
      case 'PT': return S([R(0, 0, 12, 20, '#006600', 1), R(12, 0, 18, 20, '#ff0000', 2)]);
      default: return h('svg', { width: w, height: hgt, viewBox: '0 0 30 20', style: { ...style, background: 'var(--acc-soft)' } },
        h('text', { x: 15, y: 14.5, textAnchor: 'middle', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace', fontWeight: 600, fill: 'var(--acc)' }, (code || '??').slice(0, 2)));
    }
  }

  const ART = {
    AT: { sky: ['#dfe3dc', '#f3ecdc'], layers: [
      { pts: [.5, .78, .6, .92, .66, .84, .58, .74, .5], c: [200, 10, 72], snow: .7 },
      { pts: [.36, .52, .44, .62, .4, .55, .44, .5, .34], c: [175, 12, 54] },
      { pts: [.2, .28, .24, .32, .26, .22, .3, .25, .2], c: [160, 20, 36] },
      { pts: [.08, .1, .12, .09, .11, .08, .1, .12, .09], c: [158, 30, 24] }] },
    DE: { sky: ['#e1e4dc', '#f3ecdc'], layers: [
      { pts: [.44, .6, .5, .68, .54, .62, .48, .64, .5], c: [205, 9, 74], snow: .62 },
      { pts: [.3, .36, .31, .38, .33, .31, .36, .32, .3], c: [150, 12, 54] },
      { pts: [.18, .22, .24, .2, .17, .23, .21, .19, .22], c: [140, 20, 38] },
      { pts: [.08, .1, .09, .11, .08, .1, .09, .08, .1], c: [150, 28, 26] }] },
    IT: { sky: ['#e6e1d6', '#f4ecdc'], layers: [
      { pts: [.48, .9, .56, .84, .96, .6, .88, .62, .5], c: [20, 22, 70], snow: .86 },
      { pts: [.34, .44, .38, .48, .4, .43, .37, .42, .34], c: [25, 14, 52] },
      { pts: [.18, .24, .2, .26, .22, .2, .24, .21, .18], c: [95, 18, 38] },
      { pts: [.08, .1, .09, .11, .09, .08, .1, .09, .08], c: [110, 24, 26] }] },
    ZA: { sky: ['#efe0c2', '#f6eddc'], sun: [258, 40, 13], layers: [
      { pts: [.26, .4, .7, .72, .72, .715, .55, .38, .3], c: [28, 12, 52], flat: true },
      { pts: [.2, .26, .3, .27, .24, .22, .26, .2, .18], c: [80, 14, 40] },
      { pts: [.1, .1, .1, .1, .1, .1, .1, .1, .1], c: [195, 30, 42], flat: true },
      { pts: [.05, .06, .05, .05, .06, .05, .05, .06, .05], c: [38, 30, 70], flat: true }] }
  };
  function rng(seed) {
    let a = 0; for (let i = 0; i < seed.length; i++) a = (a * 31 + seed.charCodeAt(i)) | 0;
    return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function specFor(code) {
    if (ART[code]) return ART[code];
    const r = rng(code || 'xx'); const hue = Math.floor(r() * 360);
    const mk = (base, amp) => Array.from({ length: 9 }, () => base + r() * amp);
    return { sky: ['#c9d6dc', '#f1efe6'], layers: [
      { pts: mk(.45, .35), c: [hue, 14, 60], snow: .72 }, { pts: mk(.28, .14), c: [(hue + 40) % 360, 22, 38] }, { pts: mk(.12, .1), c: [(hue + 60) % 360, 26, 46] }] };
  }
  const ridge = (pts, x) => { const p = x * (pts.length - 1), i = Math.min(Math.floor(p), pts.length - 2), t = p - i, m = (1 - Math.cos(t * Math.PI)) / 2; return pts[i] * (1 - m) + pts[i + 1] * m; };
  const hex2 = s => [1, 3, 5].map(i => parseInt(s.slice(i, i + 2), 16));
  const mix = (a, b, t) => { const A = hex2(a), B = hex2(b); return 'rgb(' + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(',') + ')'; };
  const hsl = (c, dl, ds) => `hsl(${c[0]} ${Math.max(0, c[1] + (ds || 0))}% ${Math.max(4, Math.min(96, c[2] + dl))}%)`;

  const artCache = {};
  function art(code, stil) {
    const key = code + stil;
    if (artCache[key]) return artCache[key];
    const W = 320, H = 150, sp = specFor(code), r = rng(code + stil), kids = [];
    let k = 0;
    if (stil === 'retro') {
      kids.push(h('rect', { key: k++, x: 0, y: 0, width: W, height: H, fill: sp.sky[1] }));
      kids.push(h('rect', { key: k++, x: 0, y: 0, width: W, height: H * .35, fill: sp.sky[0] }));
      kids.push(h('rect', { key: k++, x: 0, y: H * .35, width: W, height: 3, fill: sp.sky[0], opacity: .6 }));
      kids.push(h('rect', { key: k++, x: 0, y: H * .35 + 6, width: W, height: 2, fill: sp.sky[0], opacity: .35 }));
      if (sp.sun) kids.push(h('circle', { key: k++, cx: sp.sun[0], cy: sp.sun[1], r: sp.sun[2], fill: '#e9a94b' }));
      const N = 80;
      sp.layers.forEach(L => {
        const top = [];
        for (let i = 0; i <= N; i++) { const x = i / N * W, v = ridge(L.pts, i / N); top.push([x, H - v * H * .95, v]); }
        kids.push(h('path', { key: k++, d: 'M0 ' + H + ' ' + top.map(p => 'L' + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ') + ' L' + W + ' ' + H + 'Z', fill: hsl(L.c, 0) }));
        if (L.snow) {
          const sl = H - L.snow * H * .95, low = top.map(p => [p[0], Math.max(p[1], Math.min(sl + (p[2] - L.snow) * 40, H))]);
          kids.push(h('path', { key: k++, d: 'M' + top.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L') + ' L' + low.slice().reverse().map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L') + 'Z', fill: '#f7f3ea' }));
        }
      });
      return (artCache[key] = h('svg', { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: 'xMidYMax slice', style: { display: 'block', width: '100%', height: '100%' }, 'aria-hidden': true }, kids));
    }
    const SX = 6, SY = 3, sky = [];
    for (let y = 0; y <= SY; y++) { const row = []; for (let x = 0; x <= SX; x++) row.push([x / SX * W + (x % SX ? (r() - .5) * 30 : 0), y / SY * H * .8 + (y % SY ? (r() - .5) * 16 : 0)]); sky.push(row); }
    for (let y = 0; y < SY; y++) for (let x = 0; x < SX; x++) {
      const a = sky[y][x], b = sky[y][x + 1], c = sky[y + 1][x], d = sky[y + 1][x + 1];
      [[a, b, c], [b, d, c]].forEach(t => { const cy = (t[0][1] + t[1][1] + t[2][1]) / 3; kids.push(h('polygon', { key: k++, points: t.map(p => p.join(',')).join(' '), fill: mix(sp.sky[0], sp.sky[1], Math.min(1, Math.max(0, cy / (H * .8) + (r() - .5) * .18))) })); });
    }
    if (sp.sun) { const [sx, sy, sr] = sp.sun; const pts = []; for (let i = 0; i < 7; i++) { const an = i / 7 * Math.PI * 2; pts.push([sx + Math.cos(an) * sr, sy + Math.sin(an) * sr]); } pts.forEach((p, i) => kids.push(h('polygon', { key: k++, points: [[sx, sy], p, pts[(i + 1) % 7]].map(q => q.join(',')).join(' '), fill: i % 2 ? '#f2a33a' : '#f5b552' }))); }
    sp.layers.forEach(L => {
      const N = 14, R = [], M = [], B = [];
      for (let i = 0; i <= N; i++) {
        const jx = (i % N ? (r() - .5) * (W / N) * .5 : 0), x = i / N * W + jx, v = ridge(L.pts, Math.max(0, Math.min(1, x / W)));
        const ry = H - v * H * .95 + (L.flat ? 0 : (r() - .5) * 8);
        R.push([x, ry, v]); M.push([x + (r() - .5) * 8, ry + (H - ry) * .5 + (r() - .5) * 8]); B.push([x, H]);
      }
      for (let i = 0; i < N; i++) {
        const slope = R[i + 1][1] - R[i][1];
        const top = Math.max(R[i][2], R[i + 1][2]);
        const snowy = L.snow && top > L.snow;
        const f1 = snowy ? `hsl(210 12% ${90 - r() * 6}%)` : hsl(L.c, (slope > 0 ? -6 : 6) + (r() - .5) * 5);
        const f2 = snowy ? `hsl(210 10% ${80 - r() * 6}%)` : hsl(L.c, (slope > 0 ? 2 : -3) + (r() - .5) * 5);
        [[R[i], R[i + 1], M[i], f1], [R[i + 1], M[i + 1], M[i], f2], [M[i], M[i + 1], B[i], hsl(L.c, -4 + (r() - .5) * 4)], [M[i + 1], B[i + 1], B[i], hsl(L.c, -7 + (r() - .5) * 4)]]
          .forEach(t => kids.push(h('polygon', { key: k++, points: t.slice(0, 3).map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' '), fill: t[3], stroke: t[3], strokeWidth: .6 })));
      }
    });
    return (artCache[key] = h('svg', { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: 'xMidYMax slice', style: { display: 'block', width: '100%', height: '100%' }, 'aria-hidden': true }, kids));
  }

  window.BB_GRAFIK = { icon, mascot, flag, art };
})();
