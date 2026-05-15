import { execFileSync } from 'child_process'
import { statSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import ffmpegPath from 'ffmpeg-static'
import ffprobePath from 'ffprobe-static'

const videoDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/assets/video')

const jobs = [
  {
    input: 'intro.mp4',
    mp4: 'intro-opt.mp4',
    webm: 'intro-opt.webm',
    maxWidth: 1920,
    crf: 28,
    webmCrf: 32,
  },
  {
    input: 'Para Web Actualizado.mp4',
    mp4: 'partners-opt.mp4',
    webm: 'partners-opt.webm',
    maxWidth: 1600,
    crf: 28,
    webmCrf: 33,
  },
]

function probe(file) {
  const json = execFileSync(ffprobePath.path, [
    '-v', 'quiet',
    '-print_format', 'json',
    '-show_streams',
    '-show_format',
    file,
  ], { encoding: 'utf8' })
  const { streams, format } = JSON.parse(json)
  const v = streams.find((s) => s.codec_type === 'video')
  return {
    width: v?.width,
    height: v?.height,
    duration: Number(format?.duration ?? 0).toFixed(1),
    sizeMb: (Number(format?.size ?? 0) / 1024 / 1024).toFixed(1),
  }
}

function sizeKb(file) {
  return Math.round(statSync(file).size / 1024)
}

function encodeMp4(input, output, { maxWidth, crf }) {
  execFileSync(ffmpegPath, [
    '-y',
    '-i', input,
    '-an',
    '-vf', `scale='min(${maxWidth},iw)':-2`,
    '-c:v', 'libx264',
    '-preset', 'medium',
    '-crf', String(crf),
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    output,
  ], { stdio: 'inherit' })
}

function encodeWebm(input, output, { maxWidth, webmCrf }) {
  execFileSync(ffmpegPath, [
    '-y',
    '-i', input,
    '-an',
    '-vf', `scale='min(${maxWidth},iw)':-2`,
    '-c:v', 'libvpx-vp9',
    '-crf', String(webmCrf),
    '-b:v', '0',
    '-row-mt', '1',
    output,
  ], { stdio: 'inherit' })
}

for (const job of jobs) {
  const input = path.join(videoDir, job.input)
  const mp4Out = path.join(videoDir, job.mp4)
  const webmOut = path.join(videoDir, job.webm)

  console.log(`\n── ${job.input}`)
  console.log('  origen:', probe(input))

  console.log('  → MP4…')
  encodeMp4(input, mp4Out, job)
  console.log(`     ${job.mp4}: ${sizeKb(mp4Out)} KB`)

  console.log('  → WebM…')
  encodeWebm(input, webmOut, job)
  console.log(`     ${job.webm}: ${sizeKb(webmOut)} KB`)
}

console.log('\nListo.')
