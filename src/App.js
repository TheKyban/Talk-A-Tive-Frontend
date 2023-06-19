import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Chats from './pages/Chats/Chats';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from './http/http';
import { authenticateUser } from './store/slices/authSlice';
import axios from 'axios';

function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

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

        dispatch(authenticateUser(res.data))

        if (res.data.success) {
          navigate("/chats")
        }

      }).catch(err => {
        if (axios.isCancel(err)) {
          console.log("cancel")
        }
      })

    /**
     * Cleaning the api call
     */


    return () => {
      cancelToken.cancel()
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
