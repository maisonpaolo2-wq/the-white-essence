/**
 * Crop Instagram screenshots to remove UI chrome (status bar, header, engagement bar).
 * Run: npm run crop
 *
 * Source images: Claude session temp folder (Instagram screenshots 1-9.jpg)
 * Output: public/photos/
 *
 * Instagram screenshot layout (approx):
 *   - Top: ~21% of height  (status bar + "Publicaciones" nav + profile row)
 *   - Bottom: ~20% of height (engagement icons + caption + date)
 *   - Content: middle ~59%
 */

import sharp from 'sharp'
import { mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const SRC = 'C:\\Users\\Guillermo\\AppData\\Local\\Temp\\claude\\C--Users-Guillermo-OneDrive-Escritorio-wvs-venue-portal\\5e43f18e-6df2-4431-a50b-83d92e081969\\images'
const OUT = path.join(ROOT, 'public', 'photos')

mkdirSync(OUT, { recursive: true })

const MAP = [
  { src: '2.jpg',  out: 'hero.jpg',        topPct: 0.20, botPct: 0.20 },
  { src: '1.jpg',  out: 'intro.jpg',        topPct: 0.22, botPct: 0.22 },
  { src: '1.jpg',  out: 'sobre-mar.jpg',    topPct: 0.22, botPct: 0.22 },
  { src: '5.jpg',  out: 'service-1.jpg',    topPct: 0.20, botPct: 0.22 },
  { src: '4.jpg',  out: 'service-2.jpg',    topPct: 0.20, botPct: 0.24 },
  { src: '8.jpg',  out: 'service-3.jpg',    topPct: 0.20, botPct: 0.22 },
  { src: '5.jpg',  out: 'portfolio-1.jpg',  topPct: 0.20, botPct: 0.22 },
  { src: '2.jpg',  out: 'portfolio-2.jpg',  topPct: 0.20, botPct: 0.20 },
  { src: '3.jpg',  out: 'portfolio-3.jpg',  topPct: 0.20, botPct: 0.24 },
  { src: '4.jpg',  out: 'portfolio-4.jpg',  topPct: 0.20, botPct: 0.24 },
  { src: '7.jpg',  out: 'portfolio-5.jpg',  topPct: 0.20, botPct: 0.22 },
  { src: '6.jpg',  out: 'portfolio-6.jpg',  topPct: 0.20, botPct: 0.22 },
  { src: '5.jpg',  out: 'og-image.jpg',     topPct: 0.20, botPct: 0.22 },
]

for (const { src, out, topPct, botPct } of MAP) {
  const srcPath = path.join(SRC, src)
  const outPath = path.join(OUT, out)

  try {
    const meta = await sharp(srcPath).metadata()
    const { width, height } = meta

    if (!width || !height) {
      console.error(`Could not get dimensions for ${src}`)
      continue
    }

    const top = Math.round(height * topPct)
    const bottom = Math.round(height * botPct)
    const cropHeight = height - top - bottom

    await sharp(srcPath)
      .extract({ left: 0, top, width, height: cropHeight })
      .toFile(outPath)

    console.log(`  ${out} <- ${src} (${width}x${height} -> ${width}x${cropHeight})`)
  } catch (err) {
    console.error(`  ERROR ${src} -> ${out}:`, err.message)
  }
}

console.log('\nCrop complete. Check public/photos/')
