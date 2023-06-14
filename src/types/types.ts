export interface User {
  id: {
    name: string
  }
  name: {
    first: string,
    last: string
  }
  location: {
    country: string
  },
  picture: {
    thumbnail: string
  }
}