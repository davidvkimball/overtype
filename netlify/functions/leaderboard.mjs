import { getStore } from '@netlify/blobs';

const CAP = 5000000;   // max plausible score (anti-garbage)
const WPM_CAP = 400;
const MAX = 100;       // keep the top 100

const J = (o, s) => new Response(JSON.stringify(o), {
  status: s || 200,
  headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
});

function clean(n) {
  return (String(n || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3)) || 'AAA';
}

export default async (req) => {
  const store = getStore('overtype-leaderboard');

  if (req.method === 'GET') {
    const list = (await store.get('scores', { type: 'json' })) || [];
    return J(list.slice(0, 20));
  }

  if (req.method === 'POST') {
    let b;
    try { b = await req.json(); } catch (e) { return J({ error: 'bad json' }, 400); }
    const name = clean(b.name);
    const score = Math.floor(Number(b.score));
    let wpm = Math.floor(Number(b.wpm));
    if (!Number.isFinite(score) || score < 0 || score > CAP) return J({ error: 'bad score' }, 400);
    if (!Number.isFinite(wpm) || wpm < 0 || wpm > WPM_CAP) wpm = 0;

    const list = (await store.get('scores', { type: 'json' })) || [];
    list.push({ name, score, wpm, t: Date.now() });
    list.sort((a, b) => b.score - a.score);
    const top = list.slice(0, MAX);
    await store.setJSON('scores', top);

    const rank = top.filter(e => e.score > score).length + 1;
    return J({ top: top.slice(0, 20), rank, total: top.length });
  }

  return J({ error: 'method not allowed' }, 405);
};
