export type posArr = [number, number]

export interface pos {
  /**
   * x 坐标
   */
  x: number
  /**
   * y 坐标
   */
  y: number
}

export interface stepscenteroptions extends pos {
  /**
   * length 多少个框
   */
  length: number
  /**
   * steps 每个框的长度
   */
  steps: number
}

export interface renderchessmanoptions extends pos {
  /**
   * radius 绘画的半径
   */
  radius: number
  /**
   * color 绘画的颜色
   */
  color:string
  /**
   * ctx canvas的2d实例
   */
  ctx:CanvasRenderingContext2D
}
