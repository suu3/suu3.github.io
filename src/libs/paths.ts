export const getCategoryPaths = pathname =>
  `/${decodeURI(pathname).split("/")[1]}`
