export const userPeaksEndpoint = "/api/user-peaks"

export const getUserPeaks = async (userPeaksEndpoint: string) => {
  const response = await fetch(userPeaksEndpoint, {
    method: "GET",
  })

  return response.json()
}

export const addSummitOptions = (newSummit: any) => {
  return {
    optimisticData: (summits: any) => {
      return [...summits, newSummit]
    },
    populateCache: (added: any, summits: any) => {
      return [...summits, added]
    },
    rollbackOnError: true,
    revalidate: false,
  }
}

export const addSummit = async (newSummit: any) => {
  const response = await fetch(userPeaksEndpoint, {
    method: "POST",
    body: JSON.stringify(newSummit),
  })

  return response.json()
}

export const updateSummitOptions = (updatedSummit: any) => {
  return {
    // optimistic data displays until we populate cache
    // param is previous data
    optimisticData: (summits: any) => {
      const prevSummits = summits.filter((summit: any) => {
        return summit.id !== updatedSummit.id
      })
      return [...prevSummits, updatedSummit].sort((a, b) => b.id - a.id)
    },
    // response from API request is 1st param
    // previous data is 2nd param
    populateCache: (updated: any, summits: any) => {
      const prevSummits = summits.filter((summit: any) => {
        return summit.id !== updatedSummit.id
      })
      return [...prevSummits, updated].sort((a, b) => b.id - a.id)
    },
    rollbackOnError: true,
    revalidate: false,
  }
}

export const updateSummit = async (updatedSummit: any) => {
  const response = await fetch(userPeaksEndpoint, {
    method: "PATCH",
    body: JSON.stringify(updatedSummit),
    headers: { "Content-Type": "application/json" },
  })
  return response.json()
}

export const deleteSummitOptions = (summitId: string) => {
  return {
    // optimistic data displays until we populate cache
    // param is previous data
    optimisticData: (userPeaks: any) => {
      userPeaks.forEach((userPeak: any) => {
        if (userPeak.summitId === summitId) {
          userPeak.summitId = null
          return
        }
      })
      return userPeaks
    },
    // response from API request is 1st param
    // previous data is 2nd param
    populateCache: (emptyResponseObj: any, userPeaks: any) => {
      userPeaks.forEach((userPeak: any) => {
        if (userPeak.summitId === summitId) {
          userPeak.summitId = null
          return
        }
      })
      return userPeaks
    },
    rollbackOnError: true,
    revalidate: false,
  }
}

export const deleteSummit = async (summitId: string) => {
  const response = await fetch(userPeaksEndpoint, {
    method: "PUT",
    body: JSON.stringify(summitId),
    headers: { "Content-Type": "application/json" },
  })

  return response.json()
}
