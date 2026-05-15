import sharp from 'sharp'
import { mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const logo = path.join(root, 'src/assets/img/logo.png')
const outDir = path.join(root, 'public')

mkdirSync(outDir, { recursive: true })

// Recorte cuadrado del símbolo (lado izquierdo del logo)
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

console.log('Listo → public/')
