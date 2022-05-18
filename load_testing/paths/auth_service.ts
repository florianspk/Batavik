import { IPath } from '../d'
const auth_service_path: IPath = {
  name: 'auth_service',
  port: 3010,
  pathList: [
    { method: 'POST', path: '/api/auth/login', data: { email: 'julienkeiff@gmail.com', password: 'test' } },
    { method: 'POST', path: '/api/auth/register', data: { username: 'admin', password: 'admin' } },
    { method: 'GET', path: '/api/auth/validateToken', data: null },  
  ]
}

module.exports = auth_service_path