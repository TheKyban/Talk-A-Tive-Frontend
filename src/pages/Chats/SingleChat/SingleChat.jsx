import React, { useEffect, useState } from "react";
import styles from "./SingleChat.module.css";
import SingleChatHeader from "../../../components/Chats/SingleChatHeader/SingleChatHeader";
import sendIcon from "../../../Images/send.svg";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import ScrollableFeed from "react-scrollable-feed";
import { URL, createMessageApi, fetchMessage } from "../../../http/http";
import { io } from "socket.io-client";

import { v4 as uuid } from "uuid";

let socket;

const SingleChat = () => {
	const { selectedUser } = useSelector((stata) => stata.User);
	const { user } = useSelector((stata) => stata.Auth);
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	/**
	 * send messages
	 */
	const createMessage = async (e) => {
		e.preventDefault();
		if (!message.length >= 1) {
			return;
		}
		const m = {
			chatId: selectedUser.chatId,
			content: message,
			userId: user,
			_id: uuid(),
		};

		/**
		 * append message in messages list
		 */
		setMessages((prev) => [...prev, m]);

		/**
		 * emmitting messages to socket.io
		 */

		socket.emit("update", m);

		const newMessage = message;
		setMessage("");

		/**
		 * storing messges in db
		 */
		await createMessageApi({
			chatId: selectedUser.chatId,
			content: newMessage,
		});

	};

	/**
	 * Fetching messages
	 */

	useEffect(() => {
		if (selectedUser) {
			fetchMessage(selectedUser.chatId).then((res) => {
				setMessages(res.data.messages);
			});
		}
	}, [selectedUser]);

	/**
	 * socket connection
	 */

	useEffect(() => {
		if (!selectedUser) {
			return;
		}

		socket = io(URL);
		socket.emit("join-chat", selectedUser);

		return () => {
			// socket.disconnect(true);
		};
	}, [selectedUser]);

	/**
	 * recieving new messages
	 */

	useEffect(() => {
		let tem = false;
		if (!tem && selectedUser) {
			socket.on("newMessage", (data) => {
				setMessages((pre) => [...pre, data]);
			});
		}

		return () => {
			tem = true;
			// socket.disconnect(true);
		};
	}, [selectedUser]);

	return selectedUser ? (
		<motion.div
			className={styles.wrapper}
			initial={{ x: 200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: 200 }}
		>
			{/* Header */}

			<SingleChatHeader data={selectedUser} />

			{/* Chat Body */}

			<div className={styles.chatBody}>
				<ScrollableFeed className={styles.messagebox}>
					{messages &&
						messages.map((m) => {
							/**
							 * friend messages
							 */

							if (m.userId._id === selectedUser._id) {
								return (
									<div className={styles.other} key={m._id}>
										<span>{m.content}</span>
									</div>
								);
							} else {
								/**
								 * my messages
								 */
								return (
									<div className={styles.me} key={m._id}>
										<span>{m.content}</span>
									</div>
								);
							}
						})}
				</ScrollableFeed>
			</div>

			{/* input */}

			<form className={styles.inputWrapper} onSubmit={createMessage}>
				<input
					type="text"
					placeholder="Enter a message"
					className={styles.input}
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				/>
				<button type="submit" className={styles.btn}>
					<img src={sendIcon} alt="" className={styles.btnImage} />
				</button>
			</form>
		</motion.div>
	) : (
		<h1 className={styles.nothing}>Please select a user to start typing</h1>
	);
};

export default SingleChat;
