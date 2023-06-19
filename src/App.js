import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Chats from './pages/Chats/Chats';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { URL, refresh } from './http/http';
import { authenticateUser } from './store/slices/authSlice';
import axios from 'axios';

function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth } = useSelector(state => state.Auth)
  /**
     * checking user is authenticated or not
     */


  useLayoutEffect(() => {


    /**
     * OnRefresh
     */

    const cancelToken = axios.CancelToken.source()

    refresh(cancelToken.token)
      .then(res => {

        /**
         * Authenticating the user again
         */

        console.log(res.data)
        dispatch(authenticateUser(res.data))

        if (res.data.success) {
          navigate("/chats")
        }

      }).catch(err => {
        if (axios.isCancel(err)) {
          console.log(err)
          console.log("Request cleared")
        }
      })

    /**
     * Cleaning the api call
     */


    return () => {
      // cancelToken.cancel()
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
