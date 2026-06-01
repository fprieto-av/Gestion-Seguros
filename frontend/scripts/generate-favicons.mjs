import sharp from 'sharp'
import toIco from 'to-ico'
import { mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const logo = path.join(root, 'src/assets/img/logo.png')
const outDir = path.join(root, 'public')

mkdirSync(outDir, { recursive: true })

const meta = await sharp(logo).metadata()
const cropSize = meta.height

const iconBase = sharp(logo).extract({
  left: 0,
  top: 0,
  width: Math.min(cropSize, meta.width),
  height: cropSize,
})

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
]

for (const { name, size } of sizes) {
  await iconBase
    .clone()
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, name))
  console.log(name)
}

const png16 = await iconBase.clone().resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
const png32 = await iconBase.clone().resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
writeFileSync(path.join(outDir, 'favicon.ico'), await toIco([png16, png32]))
console.log('favicon.ico')

console.log('Listo → public/')
