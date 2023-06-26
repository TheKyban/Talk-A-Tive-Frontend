import React from "react";
import styles from "./BUTTON.module.css";

const BUTTON = (props) => {
	return (
		<button
			className={styles.btnFormHeader}
			{...props}
		>
			{props.text}
		</button>
	);
};

export default BUTTON;
