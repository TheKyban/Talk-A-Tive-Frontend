import React, { useEffect, useState } from "react";
import styles from "./SingleChat.module.css";
import SingleChatHeader from "../../../components/Chats/SingleChatHeader/SingleChatHeader";
import sendIcon from "../../../Images/send.svg";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import ScrollableFeed from "react-scrollable-feed";
import { URL, createMessageApi, fetchMessage } from "../../../http/http";
import { io } from "socket.io-client";

let socket;

const SingleChat = () => {
	const { selectedUser } = useSelector((stata) => stata.User);
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const createMessage = async (e) => {
		e.preventDefault();
		if (!message.length >= 1) {
			return;
		}
		const m = await createMessageApi({
			chatId: selectedUser.chatId,
			content: message,
		});

		socket.emit("update", m.data.messages);
		setMessage("");
		setMessages((prev) => [...prev, m.data.messages]);
	};

	useEffect(() => {
		if (selectedUser) {
			fetchMessage(selectedUser.chatId).then((res) => {
				setMessages(res.data.messages);
			});
		}
	}, [selectedUser]);

	useEffect(() => {
		if (!selectedUser) {
			return;
		}

		socket = io(URL);
		socket.emit("join-chat", selectedUser);

		return () => {
			// socket.off()
		};
	}, [selectedUser, io]);

	useEffect(() => {
		let tem = false;
		if (!tem && selectedUser) {
			socket.on("newMessage", (data) => {
				setMessages((pre) => [...pre, data]);
			});
		}

		return () => {
			tem = true;
			// socket.off()
		};
	}, [io, selectedUser]);

	return selectedUser ? (
		<motion.div
			className={styles.wrapper}
			initial={{ x: 200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: 200 }}
		>
			<SingleChatHeader data={selectedUser} />

			<div className={styles.chatBody}>
				<ScrollableFeed
					className={styles.messagebox}
					// animateScroll={}
				>
					{messages.map((m) => {
						if (m.userId._id === selectedUser._id) {
							return (
								<div className={styles.other} key={m._id}>
									<span>{m.content}</span>
								</div>
							);
						} else {
							return (
								<div className={styles.me} key={m._id}>
									<span>{m.content}</span>
								</div>
							);
						}
					})}
				</ScrollableFeed>
			</div>

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
