import React, { useLayoutEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Mychats from "./Mychats/Mychats";
import SingleChat from "./SingleChat/SingleChat";
import styles from "./Chats.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { refresh } from "../../http/http";
import { authenticateUser } from "../../store/slices/authSlice";
import { ToastContainer } from "react-toastify";
const Chats = () => {
	const { isAuth } = useSelector((state) => state.Auth);
	const { selectedUser } = useSelector((state) => state.User);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const windowWidth = window.innerWidth;

	/**
	 * checking user is authenticated or not
	 */

	useLayoutEffect(() => {
		/**
		 * OnRefresh
		 */

		const cancelToken = axios.CancelToken.source();
		if (!isAuth) {
			refresh(cancelToken.token)
				.then((res) => {
					/**
					 * Authenticating the user again
					 */

					const current = res.data;
					dispatch(authenticateUser(current));

					if (!current.success) {
						navigate("/");
					}
				})
				.catch((err) => {
					if (axios.isCancel(err)) {
						console.log(err);
						console.log("Request cleared from chat");
					}
				});

			return;
		}

		/**
		 * Cleaning the api call
		 */

		return () => {
			cancelToken.cancel();
		};
	}, []);

	return (
		<div>
			<Navbar />

			<div className={styles.chats}>
				{windowWidth <= 860 ? (
					windowWidth <= 860 && selectedUser ? (
						<div className={styles.singleChat}>
							<SingleChat />
						</div>
					) : (
						<div className={styles.mychats}>
							<Mychats />
						</div>
					)
				) : (
					<>
						<div className={styles.mychats}>
							<Mychats />
						</div>
						<div className={styles.singleChat}>
							<SingleChat />
						</div>
					</>
				)}
			</div>
			<ToastContainer />
		</div>
	);
};

export default Chats;
