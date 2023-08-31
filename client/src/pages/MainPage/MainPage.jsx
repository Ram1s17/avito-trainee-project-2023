import React from "react";
import { Layout } from "antd"
import { useGetAllGamesForCurrentPageQuery } from "../../services/freeToPlayGameApi";
import { useSelector } from "react-redux";
import GamesList from "../../components/GamesList/GamesList";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import FilterBar from "../../components/FilterBar/FilterBar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../ErrorPage/ErrorPage";
import { messageByStatus } from "../../utils/utils";

const { Content } = Layout;

const MainPage = () => {
    const options = useSelector((state) => state.options);

    const { data: games, isLoading, isError, error } = useGetAllGamesForCurrentPageQuery(options);

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
                <FilterBar />
                <GamesList games={games} />
                <CustomPagination totalCount={games.totalGamesCount} />
            </Content>
            <CustomFooter />
        </Layout>
    );
};

export default MainPage;