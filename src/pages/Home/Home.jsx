import React, { useState } from "react";
import styles from "./Home.module.css";
import Card from "../../components/Card/Card";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import BUTTON from "../../components/Home/BUTTON/BUTTON";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import axios from "axios";
import { loginApi, refresh, registerApi } from "../../http/http";
import { authenticateUser } from "../../store/slices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
	const [toggle, setToggle] = useState(true);
	const [details, setDetails] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { isAuth } = useSelector((state) => state.Auth);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	const changeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setDetails((pre) => ({
			...pre,
			[name]: value,
		}));
	};

	const submitHandler = async () => {
		/**
		 * Login
		 */
		if (toggle) {
			if (!details.email || !details.password) {
				toast("Enter Email and Password");
				return;
			}

			setLoading(true);

			try {
				const { data } = await loginApi({
					email: details.email,
					password: details.password,
				});
				toast(data.message);
				dispatch(authenticateUser(data));
				setLoading(false);
			} catch (error) {
				setLoading(false);
				toast(error.message);
			}
		} else {
			/**
			 * Signup
			 */
			if (
				!details.name ||
				!details.email ||
				!details.password ||
				!details.confirmPassword
			) {
				toast("Please Enter All Fields");
				return;
			}

			if (details.password !== details.confirmPassword) {
				toast("Password Not Confirmed");
				return;
			}

			setLoading(true);

			/**
			 * Registering new user to database
			 */

			try {
				const { data } = await registerApi({
					name: details.name,
					email: details.email,
					password: details.password,
				});

				toast(data.message);

				dispatch(authenticateUser(data));
				setLoading(false);
			} catch (error) {
				toast(error.message);
				setLoading(false);
			}
		}
	};

	useLayoutEffect(() => {
		/**
		 * OnRefresh
		 */

		const cancelToken = axios.CancelToken.source();

		refresh(cancelToken.token)
			.then((res) => {
				/**
				 * Authenticating the user again
				 */

				const current = res.data;
				console.log(current);
				dispatch(authenticateUser(current));

				/**
				 * Fetching chats
				 */

				if (res.data.success) {
					navigate("/chats");
				}
			})
			.catch((err) => {
				if (axios.isCancel(err)) {
					console.log(err);
					console.log("Request cleared");
				}
			});

		/**
		 * Cleaning the api call
		 */

		return () => {
			cancelToken.cancel();
		};
	}, [isAuth, navigate, dispatch]);

	return (
		<div className={styles.homeWrapper}>
			<div className={styles.home}>
				{/* Home Nav */}
				<Card>
					<h1 className={styles.headerText}>Talk-A-Tive</h1>
				</Card>

				<Card>
					<div>
						{/* Radios */}
						<motion.div
							initial={{ y: -200, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -200, opacity: 0 }}
						>
							<BUTTON
								text={"Login"}
								onClick={() => {
									setToggle(true);
									setDetails({
										name: "",
										email: "",
										password: "",
										confirmPassword: "",
									});
								}}
								style={{
									backgroundColor: toggle && "#bee3f8",
								}}
								disabled={toggle && true}
							/>
							<BUTTON
								text={"Sign Up"}
								onClick={() => {
									setToggle(false);
									setDetails({
										name: "",
										email: "",
										password: "",
										confirmPassword: "",
									});
								}}
								style={{
									backgroundColor: !toggle && "#bee3f8",
								}}
								disabled={!toggle && true}
							/>
						</motion.div>

						{/* Forms */}
						<div className={styles.formWrapper}>
							{toggle ? (
								<Login
									details={details}
									setDetails={setDetails}
									changeHandler={changeHandler}
									loading={loading}
									submitHandler={submitHandler}
								/>
							) : (
								<Signup
									details={details}
									changeHandler={changeHandler}
									loading={loading}
									submitHandler={submitHandler}
								/>
							)}
						</div>
					</div>
				</Card>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Home;
