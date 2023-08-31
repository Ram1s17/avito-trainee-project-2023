import React from "react";
import { Col, Layout, Row } from "antd";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useGetGameQuery } from "../../services/freeToPlayGameApi";
import { useParams } from "react-router-dom";
import { messageByStatus } from "../../utils/utils";
import BackButton from "../../components/BackButton/BackButton";
import GameInfo from "../../components/GameInfoCard/GameInfoCard";

const { Content } = Layout;

const GamePage = () => {
    const { id } = useParams();
    const { data: game, isLoading, isError, error } = useGetGameQuery(id);

    if (isLoading) {
        return (
            <LoadingSpinner />
        );
    }

    if (isError) {
        return (
            <ErrorPage status={error.status} message={messageByStatus[error.status]} />
        );
    }

    return (
        <Layout style={{ backgroundColor: "rgb(16, 16, 16)" }}>
            <CustomHeader />
            <Content>
                <Row>
                    <Col>
                        <BackButton />
                    </Col>
                </Row>
                <GameInfo game={game} />
            </Content>
            <CustomFooter />
        </Layout>
    );
};

export default GamePage;