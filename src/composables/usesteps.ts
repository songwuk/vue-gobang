/* eslint-disable no-console */
/**
 *
 * ******
 */
type posArr = [number, number]

export const stepscenter = (x: number, y: number, length: number, steps: number): posArr => {
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
/**
 * ******
 */
export const howwinner = () => {

}
