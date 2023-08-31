import React from "react";
import { Layout, Spin } from "antd";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
    return (
        <Layout id={styles.container}>
            <Spin size="large"/>
            <h3>Loading...</h3>
        </Layout>
    );
};

export default LoadingSpinner;