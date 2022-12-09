<script setup lang="ts">
import { stepscenteroptions, renderchessmanoptions } from '~/composables';

const state = ['vs电脑', 'vs活人']
const whofirstArr = ['先手', '后手']
const whofirst = $ref('black') // 默认黑棋先手
const isDark = useDark()
const canvas = $ref<HTMLCanvasElement | null>(null)
const scale = $ref<number>(2)
const width = $ref<number>(600 * scale)
const height = width
const rectline = $ref<number>(30 * scale)
const lineData = $ref<number>(width / rectline)
onMounted(() => {
  const cvs = canvas!
  const ctx = cvs.getContext('2d')!
  cvs.width = width
  cvs.height = height
  cvs.style.background = isDark.value ? 'white' : 'black'
  cvs.style.width = `${cvs.width / scale}px`
  cvs.style.height = `${cvs.height / scale}px`
  const renderchessboard = () => {
    ctx.strokeStyle = isDark.value ? 'black' : 'white'
    for (let index = 0; index <= lineData; index++) {
      ctx.beginPath()
      ctx.moveTo(0, rectline * index)
      ctx.lineTo(width, rectline * index)
      ctx.moveTo(rectline * index, 0)
      ctx.lineTo(rectline * index, width)
      ctx.stroke()
    }
  }
  const scrollX = document.body.scrollLeft
  const scrollY = document.body.scrollTop
  const chessman = (x: number, y: number) => {
    const xx = x * scale
    const yy = y * scale
    const obj = {
      x: xx,
      y: yy,
      length: lineData,
      steps: rectline
    } as stepscenteroptions
    const [rx, ry] = stepscenter(obj)
    const chessmanoptions = {
      x: rx,
      y: ry,
      radius: 15 * scale,
      color: 'white',
      ctx
    } as renderchessmanoptions
    renderchessman(chessmanoptions)
    // ctx.beginPath()
    // ctx.arc(rx, ry, 15 * scale, 0, 2 * Math.PI)
    // ctx.fill()
  }
  renderchessboard()
  cvs.addEventListener('click', (e: MouseEvent) => {
    const x = e.clientX + scrollX - cvs.offsetLeft
    const y = e.clientY + scrollY - cvs.offsetTop
    chessman(x, y)
  })
  /**
   * clear
   */
  const clearchessboard = () => {
    ctx.clearRect(0,0, width, height)
  }
  /**
   * 黑棋先手
   */
  const blackfirst = (x:number,y:number,radius: number,color: string,) => {
    // renderchessman(x,y,)
  }
  /**
   * 白旗先手
   */
  const whitefirst = (color: string) => {

  }
})
</script>

<template>
  <canvas ref="canvas" cursor-pointer />
</template>
