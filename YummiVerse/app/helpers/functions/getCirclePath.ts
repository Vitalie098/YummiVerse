export const getCirclePath = (cx: number, cy: number, r: number, deg: number) => {
  const theta = deg * Math.PI / 180
  const dx = r * Math.cos(theta)
  const dy = r * Math.sin(theta)

  return "M " + cx + " " + (cy - r) + " " + 
    "a " + r + "," + r + " 0 1,1 " + (2 * dx) + "," + (2 * dy) + " " + 
    "a " + r + "," + r + " 0 1,1 " + (-2 * dx) + "," + (-2 * dy)
}