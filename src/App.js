import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chats from "./pages/Chats/Chats";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL, findChats, refresh } from "./http/http";
import { authenticateUser } from "./store/slices/authSlice";
import axios from "axios";
import { allChats } from "./store/slices/userSlice";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/chats" element={<Chats />} />
		</Routes>
	);
}

export default App;
