import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body { height: 100%; }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg};
    overflow-x: hidden;
  }

  @keyframes bgFloat {
    0%   { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); filter: saturate(1.05) contrast(1.02); }
    50%  { transform: translate3d(-18px, 12px, 0) scale(1.02) rotate(6deg); filter: saturate(1.12) contrast(1.02); }
    100% { transform: translate3d(14px, -10px, 0) scale(1.01) rotate(-4deg); filter: saturate(1.08) contrast(1.03); }
  }

  @keyframes glowPulse {
    0%   { opacity: 0.75; }
    50%  { opacity: 0.95; }
    100% { opacity: 0.82; }
  }

  body::before {
    content: "";
    position: fixed;
    inset: -12%;
    z-index: -2;
    pointer-events: none;

    background:
      radial-gradient(900px 700px at 14% 10%, rgba(171, 160, 242, 0.55), transparent 60%),
      radial-gradient(850px 650px at 82% 18%, rgba(242, 90, 56, 0.22), transparent 60%),
      radial-gradient(1000px 800px at 55% 95%, rgba(242, 144, 87, 0.18), transparent 62%),
      conic-gradient(from 220deg at 35% 35%, rgba(171, 160, 242, 0.10), rgba(242, 90, 56, 0.06), rgba(242, 185, 136, 0.10), rgba(171, 160, 242, 0.10));

    background-repeat: no-repeat;
    transform: translateZ(0);
    will-change: transform, filter, opacity;

    animation: bgFloat 18s ease-in-out infinite alternate, glowPulse 8s ease-in-out infinite;
  }

  body::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;

    background-image:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E");
    background-repeat: repeat;
    opacity: 0.08;
    mix-blend-mode: multiply;
  }

  @media (prefers-reduced-motion: reduce) {
    body::before { animation: none; }
  }

  a { color: inherit; }
`
