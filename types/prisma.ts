export interface Summit {
  peakId: string
  userId: string
  summitDate: string
  summitTime: number
}

export interface Peak {
  id: string
  name: string
  slug: string
  elevation: number
  province: string
  county: string
  range: string
  latitude: number
  longitude: number
  highestPoint?: string
  imageUrl: string
  userId?: string
  summitId?: string
  summitDate?: any
  summitTime?: number
  summitWeather?: boolean
}
