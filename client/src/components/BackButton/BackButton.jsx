import React from "react";
import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            id={styles.backButton}
            onClick={() => navigate('/')}
        >
            Назад
        </button>
    );
};

export default BackButton;