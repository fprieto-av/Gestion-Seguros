import sharp from 'sharp'
import { fileURLToPath } from 'url'
import path from 'path'

const imgDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/assets/img')

const jobs = [
  { input: 'equipocomercial.png', output: 'equipocomercial.webp', width: 1400, quality: 82 },
  { input: 'nosotros.png', output: 'nosotros-hero.webp', width: 1920, quality: 80 },
]

for (const { input, output, width, quality } of jobs) {
  const src = path.join(imgDir, input)
  const dest = path.join(imgDir, output)
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(dest)
  const { size } = await import('fs/promises').then((fs) =>
    fs.stat(dest).then((s) => ({ size: Math.round(s.size / 1024) }))
  )
  console.log(`${output}: ${size} KB`)
}
