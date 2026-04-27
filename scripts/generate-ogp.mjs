import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = join(__dirname, '..', 'public', 'ogp.png')

const dotsBg = () => {
  const dots = []
  for (let y = 30; y < 630; y += 60) {
    for (let x = 30; x < 1200; x += 60) {
      dots.push(`<circle cx="${x}" cy="${y}" r="2" fill="#ffffff" opacity="0.08" />`)
    }
  }
  return dots.join('')
}

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3a8a" />
      <stop offset="100%" style="stop-color:#0c1f5b" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#60a5fa" />
      <stop offset="100%" style="stop-color:#3b82f6" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  ${dotsBg()}

  <circle cx="120" cy="120" r="100" fill="#3b82f6" opacity="0.18" />
  <circle cx="1080" cy="500" r="140" fill="#60a5fa" opacity="0.12" />

  <!-- Logo mark -->
  <rect x="540" y="140" width="120" height="120" rx="28" fill="url(#accent)" />
  <text x="600" y="234" text-anchor="middle" font-family="-apple-system,Segoe UI,Helvetica,Arial,sans-serif" font-size="86" font-weight="800" fill="#ffffff">s</text>

  <!-- Title -->
  <text x="600" y="340" text-anchor="middle" font-family="-apple-system,Segoe UI,Helvetica,Arial,sans-serif" font-size="68" font-weight="800" fill="#ffffff" letter-spacing="-1">simtool.dev</text>

  <!-- Accent line -->
  <rect x="500" y="370" width="200" height="3" rx="1.5" fill="#60a5fa" opacity="0.7" />

  <!-- Subtitle -->
  <text x="600" y="430" text-anchor="middle" font-family="'Hiragino Kaku Gothic ProN','Yu Gothic',Meiryo,sans-serif" font-size="30" fill="#ffffff" opacity="0.92">暮らしを便利にするWeb計算ツール集</text>

  <!-- Tags -->
  <text x="600" y="480" text-anchor="middle" font-family="'Hiragino Kaku Gothic ProN','Yu Gothic',Meiryo,sans-serif" font-size="20" fill="#cbd5e1" opacity="0.85">電気代 ・ 引越し ・ 手取り ・ サイズ ・ 色 ・ 和柄</text>

  <!-- Footer -->
  <rect x="0" y="560" width="1200" height="70" fill="#000000" opacity="0.32" />
  <text x="600" y="604" text-anchor="middle" font-family="-apple-system,Segoe UI,Helvetica,Arial,sans-serif" font-size="20" fill="#ffffff" opacity="0.85">simtool.dev</text>
</svg>
`

const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer()
await sharp(pngBuffer).toFile(OUTPUT_PATH)
console.log('OGP image generated:', OUTPUT_PATH)
