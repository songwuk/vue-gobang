/* eslint-disable no-console */
/**
 *
 * ******
 */

import { posArr, stepscenteroptions,renderchessmanoptions } from "./types"

export const stepscenter = (options: stepscenteroptions): posArr => {
  const {
    x,
    y,
    length,
    steps
  } = options
  const newSet = new Map()
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++)
      newSet.set(`${steps * i}rect${steps * j}`, [steps * i, j * steps])
  }
  /**
   * 余数
   */
  const xfix = Math.floor(x / steps)
  const yfix = Math.floor(y / steps)
  const xremainder = x % steps
  const yremainder = y % steps
  let returnx = 0
  let returny = 0
  if (x >= steps * xfix && x <= steps * (xfix + 1)) {
    if (xremainder <= steps / 2) {
      console.log(xfix, '计算出x靠左')
      returnx = xfix * steps
    }
    else if (xremainder > steps / 2) {
      console.log(xfix + 1, '计算出x靠右')
      returnx = (xfix + 1) * steps
    }
  }
  if (y >= steps * yfix && y <= steps * (yfix + 1)) {
    if (yremainder <= steps / 2) {
      returny = yfix * steps
      console.log(yfix, '计算出y靠上')
    }
    else if (yremainder > steps / 2) {
      returny = (yfix + 1) * steps
      console.log(yfix + 1, '计算出y靠下')
    }
  }
  return newSet.get(`${returnx}rect${returny}`)
}
export const renderchessman = (options: renderchessmanoptions) => {
  const {
    x,
    y,
    radius,
    color,
    ctx
  } = options
  ctx.beginPath()
  const radialGradient = ctx.createRadialGradient(
    radius,
    radius,
    radius - 2, // 外部圆心和半径
    radius,
    radius,
    0 // 内部圆心和半径
  );
  // 判断棋子的类型，设置不同的渐变色
  if (color === "black") {
    radialGradient.addColorStop(0, "#0A0A0A");
    radialGradient.addColorStop(1, "#636766");
  } else {
    radialGradient.addColorStop(0, "#D1D1D1");
    radialGradient.addColorStop(1, "#F9F9F9");
  }
  ctx.fillStyle = radialGradient
  ctx.fillRect(x - radius,y - radius, x + radius,y + radius);
}
/**
 * ****** win ******
 */
export const howwinner = () => {

}
