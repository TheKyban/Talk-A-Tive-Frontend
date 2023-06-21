import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Chats from './pages/Chats/Chats';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { URL, findChats, refresh } from './http/http';
import { authenticateUser } from './store/slices/authSlice';
import axios from 'axios';
import { allChats } from './store/slices/userSlice';

function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth } = useSelector(state => state.Auth)
  /**
     * checking user is authenticated or not
     */


  useEffect(() => {


    /**
     * OnRefresh
     */

    const cancelToken = axios.CancelToken.source()

    refresh(cancelToken.token)
      .then(res => {

        /**
         * Authenticating the user again
         */

        const current = res.data
        dispatch(authenticateUser(current))


        /**
         * Fetching chats
         */


        if (res.data.success) {
          navigate("/chats")
        }

      }).catch(err => {
        if (axios.isCancel(err)) {
          console.log(err)
          console.log("Request cleared")
        }
      })



    let temp = false
    if (isAuth && !temp) {
      navigate("/chats")
    }


    /**
     * Cleaning the api call
     */


    return () => {
      cancelToken.cancel()
      temp = true
    }

  }, [])


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
}

export default App;
