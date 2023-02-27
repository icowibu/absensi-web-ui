import React, { Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { fullScreen } from '../../redux/actions/layout/LayoutAction'

// routes config
import routes from '../../routes'
import DashboardRoutes from '../../routes/dashboard'
import FileRoutes from '../../routes/file'
import ProtectRoutes from '../../routes/protect'
import Home from '../../views/pages/page404/home'

const AContent = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  
  // setup full screen
  let active = routes.find((e) => e.path == location.pathname)
  if (active) {
    if (active.fullScreen) {
      dispatch(fullScreen(true))
    } else if (active.fullScreen == undefined) {
      dispatch(fullScreen(false))
    }
  }

  return (
    <div className="w-full h-full">
        <Routes>

          <Route element={<ProtectRoutes/>}>
            <Route path='file/*' element={<FileRoutes />} />
            <Route path="dashboard/*" element={<DashboardRoutes />} />
            <Route path='home' element={<Home />} />
          </Route>
          
          <Route path="/" element={<Navigate to="login" replace />} />
          <Route path="*" exact element={<Navigate exact to="404" replace />} />

        </Routes>
    </div>
  )
}

export default React.memo(AContent)
