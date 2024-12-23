import slugify from "slugify"

export const getSlug = (value: string) => {
  const slug = slugify(value, {
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
  })

  return slug
}

export const getPercentage = (partialValue: number, totalValue: number) => {
  return Math.ceil((100 * partialValue) / totalValue)
}

export const getAverage = (array: number[]) => {
  if (array && array.length !== 0) {
    const average = array.reduce((x, y) => (x + y) / array.length).toFixed(1)
    return parseFloat(average).toLocaleString("es-ES")
  }
  return
}
export const getSum = (array: number[]) => {
  if (array && array.length !== 0) {
    const sum = array.reduce((x, y) => x + y).toLocaleString("es-ES")
    return parseFloat(sum).toLocaleString("es-ES")
  }

  return
}

export const getKm = (array: number[]) => {
  const sum = array.reduce((x, y) => x + y)
  const sumKm = (sum / 1000).toFixed(2)
  return parseFloat(sumKm).toLocaleString("es-ES")
}
