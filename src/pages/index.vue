<script setup lang="ts">
const canvas = $ref<HTMLCanvasElement | null>(null)
const scale = $ref<number>(2)
const width = $ref<number>(600 * scale)
const height = width
const rectline = $ref<number>(30 * scale)
onMounted(() => {
  const cvs = canvas!
  const ctx = cvs.getContext('2d')!
  cvs.width = width
  cvs.height = height
  cvs.style.background = 'white'
  cvs.style.width = `${cvs.width / scale}px`
  cvs.style.height = `${cvs.height / scale}px`
  const renderchessboard = () => {
    ctx.strokeStyle = 'black'
    const lineData = width / rectline
    for (let index = 1; index < lineData; index++) {
      ctx.beginPath()
      ctx.moveTo(0, rectline * index)
      ctx.lineTo(width, rectline * index)
      ctx.stroke()
    }
    for (let index = 1; index < lineData; index++) {
      ctx.beginPath()
      ctx.moveTo(rectline * index, 0)
      ctx.lineTo(rectline * index, width)
      ctx.stroke()
    }
  }
  renderchessboard()
  canvas?.addEventListener('click', () => {
    console.log(1)
  }, {
    capture: true,
  })
})
</script>

<template>
  <canvas ref="canvas" />
</template>
