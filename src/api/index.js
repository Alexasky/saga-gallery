const KEY = '?client_id=e2365b01362faac101082556f6ea421e3caad8ac6f9d2b2b377b3709b23b691c'
const URL = 'https://api.unsplash.com/photos/'

const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`)
  const data = await response.json()
  if(response.status >= 400) {
    throw new Error(data.error)
  }
  return data
}


const fetchImageStats = async id => {
  const response = await fetch(`${URL}/${id}/statistics${KEY}`)
  const data = await response.json()
  if(response.status >= 400) {
    throw new Error(data.error)
  }
  return data
}

export { fetchImages, fetchImageStats }
