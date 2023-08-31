import React from "react";
import { Button, Layout, Result } from "antd";
import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ status, message }) => {
    const navigate = useNavigate();

    return (
        <Layout id={styles.container}>
            <Result
                style={{
                    "color": "white"
                }}
                status={status}
                title="Sorry..."
                subTitle={message}
                extra={status === 500
                    ? <Button type="primary" onClick={() => { navigate(0) }}>Reload page</Button>
                    : <Button type="primary" onClick={() => { navigate('/') }}>Go to main page</Button >
                }
            />
        </Layout>
    );
};

export default ErrorPage;
