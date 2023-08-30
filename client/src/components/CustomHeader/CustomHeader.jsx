import React from "react";
import { Layout } from "antd";
import styles from "./CustomHeader.module.css";

const { Header } = Layout;

const CustomHeader = () => {
    return (
        <Header id={styles.header}>
            FREE - TO - PLAY GAMES
        </Header>
    );
};

export default CustomHeader;