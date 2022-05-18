import { IPath, IPathLisItem } from '../d'
const front = require('./front.ts');
const auth_service = require('./auth_service.ts');

module.exports = [front, auth_service] as IPath[];