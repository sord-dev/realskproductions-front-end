import axios from 'axios'

const instagram = axios.create({
    baseURL: 'https://www.instagram.com/realskproductions/?__a=1&__d=dis'
})

export default instagram