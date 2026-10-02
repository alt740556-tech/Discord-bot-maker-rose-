* {
  box-sizing: border-box;
}

:root {
  --rose: #ff5ea8;
  --rose-dark: #f03f96;
  --sky: #5ab6ff;
  --sky-dark: #3e93f5;
  --white: #ffffff;
  --soft: #f7f9ff;
  --ink: #182033;
  --muted: #69768f;
  --shadow: rgba(46, 72, 124, 0.18);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #fff5fb 0%, #eef7ff 45%, #ffffff 100%);
  color: var(--ink);
  position: relative;
  overflow-x: hidden;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
}

.orb-1 {
  width: 420px;
  height: 420px;
  background: rgba(255, 94, 168, 0.25);
  top: -120px;
  left: -60px;
}

.orb-2 {
  width: 360px;
  height: 360px;
  background: rgba(90, 182, 255, 0.25);
  right: -50px;
  top: 180px;
}

.topbar,
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

.topbar {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 12px;
}

.logo-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-mark {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--rose), var(--sky));
  color: white;
  font-size: 1.7rem;
  font-weight: 800;
  box-shadow: 0 8px 24px rgba(255, 94, 168, 0.28);
}

.brand-eyebrow {
  margin: 0;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  color: var(--muted);
}

.logo-wrap h1 {
  margin: 2px 0 0;
  font-size: 1.7rem;
}

.render-pill {
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid rgba(90, 182, 255, 0.25);
  background: rgba(255, 255, 255, 0.7);
  color: var(--ink);
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(28, 46, 76, 0.08);
}

.container {
  position: relative;
  z-index: 1;
  padding-top: 30px;
  padding-bottom: 50px;
}

.hero {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: 30px;
  align-items: center;
  margin-bottom: 36px;
}

.tag {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 94, 168, 0.13), rgba(90, 182, 255, 0.18));
  color: var(--ink);
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 0.72rem;
  text-transform: uppercase;
}

.hero-copy h2 {
  margin: 18px 0 14px;
  font-size: clamp(2.4rem, 4vw, 4rem);
  line-height: 1.04;
}

.hero-copy p {
  margin: 0;
  max-width: 620px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 18px 40px var(--shadow);
  border-radius: 26px;
  padding: 18px;
  backdrop-filter: blur(12px);
}

.mini-header {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot.pink { background: var(--rose); }
.dot.blue { background: var(--sky); }
.dot.white { background: #dfeafc; }

.mini-body {
  padding: 24px 18px 18px;
  background: linear-gradient(135deg, rgba(255, 94, 168, 0.08), rgba(90, 182, 255, 0.08));
  border-radius: 22px;
}

.mini-body p {
  margin: 0 0 8px;
  color: var(--muted);
}

.mini-body strong {
  font-size: 2rem;
  display: block;
  margin-bottom: 14px;
}

.muted {
  font-size: 0.92rem;
}

.builder-panel {
  display: grid;
  grid-template-columns: 1.6fr 0.9fr;
  gap: 28px;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 32px;
  box-shadow: 0 24px 60px rgba(54, 85, 140, 0.12);
  padding: 22px;
  backdrop-filter: blur(10px);
}

#bot-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;
}

label span {
  font-size: 0.9rem;
}

input,
textarea {
  width: 100%;
  border: 1px solid rgba(124, 143, 176, 0.34);
  background: rgba(247, 250, 255, 0.9);
  color: var(--ink);
  border-radius: 16px;
  padding: 14px 16px;
  font: inherit;
  box-shadow: inset 0 1px 2px rgba(17, 30, 58, 0.02);
}

input:focus,
textarea:focus {
  border-color: rgba(90, 182, 255, 0.8);
  outline: none;
  box-shadow: 0 0 0 3px rgba(90, 182, 255, 0.12);
}

textarea {
  min-height: 220px;
  resize: vertical;
}

.button-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

button {
  border: none;
  border-radius: 14px;
  font: inherit;
  font-weight: 700;
  padding: 14px 20px;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

button:hover {
  transform: translateY(-1px);
}

.primary {
  background: linear-gradient(135deg, var(--rose), var(--sky));
  color: white;
  box-shadow: 0 18px 30px rgba(255, 94, 168, 0.2);
}

.secondary {
  background: rgba(154, 169, 200, 0.12);
  color: var(--ink);
}

.result-panel {
  background: linear-gradient(180deg, #fff, #f7fbff);
  border: 1px solid rgba(124, 143, 176, 0.16);
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.result-panel h3 {
  margin: 0;
  font-size: 1.3rem;
}

.status-box {
  border-radius: 14px;
  padding: 12px 14px;
  font-size: 0.9rem;
  line-height: 1.5;
}

.status-box.info {
  background: rgba(90, 182, 255, 0.08);
  border: 1px solid rgba(90, 182, 255, 0.18);
  color: var(--ink);
}

.status-box.success {
  background: rgba(85, 182, 132, 0.08);
  border: 1px solid rgba(85, 182, 132, 0.18);
  color: #14532d;
}

pre {
  margin: 0;
  background: #0f172a;
  color: #d4faff;
  border-radius: 18px;
  padding: 18px 16px;
  font-size: 0.76rem;
  line-height: 1.7;
  overflow: auto;
}

.invite-wrap {
  display: flex;
  justify-content: center;
}

.invite-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  background: linear-gradient(135deg, var(--sky), var(--rose));
  color: white;
  padding: 14px 18px;
  border-radius: 14px;
  font-weight: 700;
  box-shadow: 0 16px 28px rgba(90, 182, 255, 0.25);
}

@media (max-width: 900px) {
  .hero,
  .builder-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .field-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    gap: 14px;
    align-items: flex-start;
  }
}
