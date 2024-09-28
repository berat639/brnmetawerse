export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://51.20.121.61:1337/api"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) { 
  const requestUrl = getStrapiURL(path)  
  const response = await fetch(requestUrl) 
  const data = await response.json()
  console.log(data)
  return data
}
