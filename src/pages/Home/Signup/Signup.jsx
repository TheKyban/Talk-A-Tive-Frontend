import React, { useState } from "react";
import styles from "./Signup.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { motion } from "framer-motion";

const Signup = ({ details, changeHandler, loading, submitHandler }) => {
	const [show, setShow] = useState(false);

	return (
		<motion.div
			className={styles.form}
			initial={{ x: 200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: 200, opacity: 0 }}
		>
			{/* Name */}
			<label className={styles.label} htmlFor="Name">
				Name<span> *</span>
			</label>
			<Input
				placeholder={"Enter Your Name"}
				value={details.name}
				name={"name"}
				onChange={changeHandler}
				id={"Name"}
			/>

			{/* Email */}
			<label className={styles.label} htmlFor="Email">
				Email<span> *</span>
			</label>
			<Input
				placeholder={"Enter Your Email"}
				value={details.email}
				name={"email"}
				onChange={changeHandler}
				id={"Email"}
			/>

			{/* Password */}
			<label className={styles.label} htmlFor="password">
				Password<span> *</span>
			</label>
			<Input
				placeholder={"Enter Your Password"}
				type={show ? "text" : "password"}
				value={details.password}
				name={"password"}
				onChange={changeHandler}
				id={"password"}
			/>

			{/* Confirm Password */}
			<label className={styles.label} htmlFor="confirmPassword">
				Confirm Password<span> *</span>
			</label>
			<Input
				type={show ? "text" : "password"}
				placeholder={"Confirm Your Password"}
				value={details.confirmPassword}
				name={"confirmPassword"}
				onChange={changeHandler}
				id={"confirmPassword"}
			/>

			{/* Show password */}
			<div className={styles.checkbox}>
				<Input id={"checkbox"} type={"checkbox"} onChange={() => setShow(!show)} />
				<label htmlFor="checkbox" className={styles.label}>Show Password</label>
			</div>

			{/* Button */}
			<div className={styles.btns}>
				<Button
					text={"Sign Up"}
					onClick={submitHandler}
					isLoading={loading}
				/>
			</div>
		</motion.div>
	);
};

export default Signup;
