import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import styles from "./Login.module.css";
import { motion } from "framer-motion";

const Login = ({
	details,
	setDetails,
	changeHandler,
	loading,
	submitHandler,
}) => {
	const [show, setShow] = useState(false);

	return (
		<motion.div
			className={styles.form}
			initial={{ x: -200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -200, opacity: 0 }}
		>
			{/* Email */}
			<label className={styles.label} htmlFor="Email">
				Email<span> *</span>
			</label>
			<Input
				type={"email"}
				placeholder={"Enter Your Email"}
				value={details.email}
				name={"email"}
				onChange={changeHandler}
			/>

			{/* Password */}
			<label className={styles.label}>
				Password<span> *</span>
			</label>
			<Input
				placeholder={"Enter Your Password"}
				type={show ? "text" : "password"}
				name={"password"}
				value={details.password}
				onChange={changeHandler}
			/>

			{/* Show password */}

			<div className={styles.checkbox}>
				<Input type={"checkbox"} onChange={() => setShow(!show)} />
				<label className={styles.label}>Show Password</label>
			</div>

			{/* Buttons */}
			<div className={styles.btns}>
				{/* Login */}
				<Button
					text={"Login"}
					onClick={submitHandler}
					isLoading={loading}
				/>

				{/* Guest login */}
				<Button
					text={"Get Guest Credential"}
					bg={"#c35718"}
					HBG={"#b34e01"}
					onClick={() => {
						setDetails({
							email: "user@example.com",
							password: "12345",
						});
					}}
				/>
			</div>
		</motion.div>
	);
};

export default Login;
