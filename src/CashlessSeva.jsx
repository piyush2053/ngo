import React, { useEffect, useRef, useState } from 'react';
import { Check, Clock, HandHeart, Play, ShieldCheck, Wallet } from 'lucide-react';
import { useLanguage } from './i18n.jsx';
import './cashless.css';

const VIDEOS_REQUIRED = 10;
const SECONDS_PER_VIDEO = 30;
const PROGRESS_KEY = 'kgvs-cashless-seva';
const statIcons = [Wallet, Play, Clock];

const today = () => new Date().toISOString().slice(0, 10);
// Only files hosted on this site can play, so an ad-network URL can never enter this flow.
const isOwnVideo = src => typeof src === 'string' && /^\/(?!\/)/.test(src) && !src.includes('\\');

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY));
    return saved?.day === today() ? Math.min(Number(saved.count) || 0, VIDEOS_REQUIRED) : 0;
  } catch {
    return 0;
  }
}

function saveProgress(count) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ day: today(), count }));
  } catch {
    // Progress still works for this visit when storage is unavailable.
  }
}

function Stats() {
  const { t } = useLanguage();
  return (
    <div className="cashless-stats">
      {t.cashless.stats.map(([value, label], i) => {
        const Icon = statIcons[i];
        return <div key={label}><Icon size={20}/><strong>{value}</strong><span>{label}</span></div>;
      })}
    </div>
  );
}

export function CashlessTeaser() {
  const { t, to } = useLanguage();
  const c = t.cashless;
  return (
    <section className="cashless-band">
      <div className="container cashless-teaser">
        <div>
          <span className="cashless-badge"><HandHeart size={15}/> {c.eyebrow}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
          <a className="button orange" href={`${to('donate')}#cashless-seva`}><HandHeart size={17}/> {c.cta}</a>
          <small className="cashless-status">{c.status}</small>
        </div>
        <Stats/>
      </div>
    </section>
  );
}

export function CashlessSeva() {
  const { t } = useLanguage();
  const c = t.cashless;
  const [videos, setVideos] = useState(null);
  const [count, setCount] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(SECONDS_PER_VIDEO);
  const [failed, setFailed] = useState(false);
  const player = useRef(null);
  const watched = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    setCount(readProgress());
    let cancelled = false;
    fetch('/seva-sponsors.json', { cache: 'no-store' })
      .then(res => (res.ok ? res.json() : { videos: [] }))
      .catch(() => ({ videos: [] }))
      .then(data => {
        if (cancelled) return;
        const valid = Array.isArray(data.videos) ? data.videos.filter(v => isOwnVideo(v?.src) && v?.sponsor) : [];
        setVideos(valid);
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const pauseWhenHidden = () => { if (document.hidden) player.current?.pause(); };
    document.addEventListener('visibilitychange', pauseWhenHidden);
    return () => document.removeEventListener('visibilitychange', pauseWhenHidden);
  }, []);

  const isLive = Boolean(videos && videos.length >= VIDEOS_REQUIRED);
  const isDone = count >= VIDEOS_REQUIRED;
  const video = isLive && !isDone ? videos[count] : null;

  useEffect(() => {
    watched.current = 0;
    lastTime.current = 0;
    setSecondsLeft(SECONDS_PER_VIDEO);
    setPlaying(false);
    setFailed(false);
  }, [count]);

  const play = () => {
    setFailed(false);
    setStarted(true);
    player.current?.play().catch(() => setFailed(true));
  };

  const trackProgress = () => {
    const el = player.current;
    if (!el) return;
    const delta = el.currentTime - lastTime.current;
    lastTime.current = el.currentTime;
    if (delta > 0 && delta < 1.5) watched.current += delta;
    const length = Number.isFinite(el.duration) ? el.duration : SECONDS_PER_VIDEO;
    const needed = Math.max(Math.min(SECONDS_PER_VIDEO, length) - 0.3, 0);
    setSecondsLeft(Math.max(Math.ceil(needed - watched.current), 0));
    if (watched.current >= needed) {
      el.pause();
      const next = count + 1;
      saveProgress(next);
      setCount(next);
    }
  };

  return (
    <section className="cashless-band" id="cashless-seva">
      <div className="container cashless-layout">
        <div>
          <span className="cashless-badge"><HandHeart size={15}/> {c.eyebrow}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
          <ol className="cashless-steps">{c.steps.map(step => <li key={step}>{step}</li>)}</ol>
          <Stats/>
        </div>
        <div className="cashless-card">
          <div className="cashless-progress-head"><strong>{c.progress(count, VIDEOS_REQUIRED)}</strong>{video && started && <span>{c.secondsLeft(secondsLeft)}</span>}</div>
          <div className="cashless-progress" role="progressbar" aria-label={c.progressLabel} aria-valuemin={0} aria-valuemax={VIDEOS_REQUIRED} aria-valuenow={count}><span style={{ width: `${(count / VIDEOS_REQUIRED) * 100}%` }}/></div>
          {isDone ? (
            <div className="cashless-message done" role="status"><Check size={30}/><h3>{c.doneTitle}</h3><p>{c.doneText}</p></div>
          ) : video ? (
            <>
              <div className="cashless-video">
                <video key={count} ref={player} src={video.src} poster={video.poster} playsInline preload="metadata" onTimeUpdate={trackProgress} onEnded={trackProgress} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} aria-label={c.sponsoredBy(video.sponsor)}/>
                {!playing && <button type="button" className="cashless-play" onClick={play} aria-label={count > 0 || started ? c.next : c.start}><Play size={26}/></button>}
              </div>
              <p className="cashless-sponsor">{c.sponsoredBy(video.sponsor)}</p>
              {failed && <p className="cashless-error" role="alert">{c.error}</p>}
              {!playing && <button type="button" className="button orange full" onClick={play}><Play size={17}/> {failed ? c.retry : started || count > 0 ? c.next : c.start}</button>}
            </>
          ) : (
            <div className="cashless-message"><ShieldCheck size={28}/><h3>{c.soonTitle}</h3><p>{c.soonText}</p></div>
          )}
          <p className="form-footnote">{c.disclosure}</p>
        </div>
      </div>
    </section>
  );
}
