import React, { useEffect, useLayoutEffect } from "react";
import MyChatHeader from "../../../components/Chats/MyChatHeader/MyChatHeader";
import styles from "./Mychats.module.css";
import { motion } from "framer-motion";
import Person from "../../../components/Person/Person";
import axios from "axios";
import { findChats } from "../../../http/http";
import { useDispatch, useSelector } from "react-redux";
import { allChats, selectUser } from "../../../store/slices/userSlice";

const Mychats = () => {
	const { allChats: chats, isAuth } = useSelector((state) => state.User);
	const { user } = useSelector((state) => state.Auth);
	const dispatch = useDispatch();

	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		findChats(cancelToken.token)
			.then((res) => {
				dispatch(allChats(res.data.data));
			})
			.catch((err) => {
				if (axios.isCancel(err)) {
					console.log("fetching canceled");
				}
			});

		return () => {
			// cancelToken.cancel()
		};
	}, [isAuth]);

	const selectingUser = (data) => {
		dispatch(selectUser(data));
	};

	return (
		<motion.div
			className={styles.MychatsWrapper}
			initial={{ x: -200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: 200 }}
		>
			<MyChatHeader />

			<div className={styles.personsWrapper}>
				{chats && chats.map((data) => (
					<Person
						data={data}
						key={data._id}
						onclick={() => selectingUser(data)}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default Mychats;
