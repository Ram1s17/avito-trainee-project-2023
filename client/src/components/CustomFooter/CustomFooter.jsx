import React from "react";
import { Layout } from "antd";
import styles from "./CustomFooter.module.css";

const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer id={styles.footer}>
            <p>@by Ramis Mubarakov. Kazan, 2023</p>
        </Footer>
    );
};

export default CustomFooter;