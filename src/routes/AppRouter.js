import { useRoutes } from 'react-router-dom'
import { routes } from './routes.js'

export const  AppRouter=()=> {
  return useRoutes(routes)
}

