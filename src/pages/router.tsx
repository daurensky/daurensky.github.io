import {createBrowserRouter} from 'react-router-dom'
import IndexRoute from '.'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexRoute />,
  },
])
