export interface User {
  id: {
    name: string,
    value: string
  }
  name: {
    first: string,
    last: string
  }
  location: {
    country: string
  },
  picture: {
    thumbnail: string,
    medium: string
  }
}