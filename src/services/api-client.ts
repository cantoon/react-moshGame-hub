import axios from 'axios'

export default axios.create({
  params: {
    baseURL: 'https://api.rawg.io/api',
    key: '7f09c409bf884635aef72090c6632716',
  },
})
