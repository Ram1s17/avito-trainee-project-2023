import React from "react";
import { Layout } from "antd"
import { useGetAllGamesForCurrentPageQuery } from "../../services/freeToPlayGameApi";
import { useSelector } from "react-redux";
import GamesList from "../../components/GamesList/GamesList";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import CustomPagination from "../../components/CustomPagination/CustomPagination";

const { Content } = Layout;

const MainPage = () => {
    const currentPage = useSelector((state) => state.options.page);

    const { data: games, isLoading } = useGetAllGamesForCurrentPageQuery(currentPage);

    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <Layout style={{ backgroundColor: "rgb(16, 16, 16)" }}>
            <CustomHeader />
            <Content>
                <GamesList games={games} />
                <CustomPagination totalCount={games.totalGamesCount} />
            </Content>
            <CustomFooter />
        </Layout>
    );
};

export default MainPage;