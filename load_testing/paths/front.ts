import { IPath } from '../d'
const front_path: IPath = {
  name: 'front',
  port: 8080,
  pathList: [
    { method: 'GET', path: '/', data: null },
    { method: 'GET', path: '/pare-douche', data: null },
    { method: 'GET', path: '/product/3', data: null },
    { method: 'GET', path: '/login', data: null },
  ]
}

module.exports = front_path