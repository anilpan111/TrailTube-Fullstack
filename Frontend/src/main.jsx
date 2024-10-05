import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//react router dom imports
import {createBrowserRouter, createRoutesFromElements , Route ,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import {Provider} from 'react-redux'
import store from './store/configStore.js'

//page imports
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import SubscriptionPage from './pages/SubscriptionPage.jsx'
import YourVideosPage from './pages/YourVideosPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import UploadPage from './pages/UploadPage.jsx'
import VideoPlayerPage from './pages/VideoPlayerPage.jsx'
import ChannelProfilePage from './pages/ChannelProfilePage.jsx'

//routes setup

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HomePage/>}/> 
      <Route path='register' element={<RegisterPage/>}/>
      <Route path='login' element={<LoginPage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
      <Route path='subscription' element={<SubscriptionPage/>}/>
      <Route path='yourVideos' element={<YourVideosPage/>}/>
      <Route path='profile' element={<ProfilePage/>}/>
      <Route path='upload' element={<UploadPage/>}/>
      <Route path='/video/play/:videoId' element={<VideoPlayerPage/>}/>
      <Route path='/profile/:userName' element={<ChannelProfilePage/>}/>
      
    </Route>
  )
) 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
