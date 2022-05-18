export interface IPath {
  name: string,
  port: number,
  pathList: IPathLisItem[];
}

export interface IPathLisItem {
  method: 'GET' | 'POST',
  path: string,
  data: Object | null
}