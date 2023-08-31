import React from "react";
import { Row, Col } from "antd";
import styles from "./GameInfoCard.module.css";
import GameInfoSection from "../GameInfoSection/GameInfoSection";
import SystemRequirementsSection from "../SystemRequirementsSection/SystemRequirementsSection";
import GameOverviewSection from "../GameOverviewSection/GameOverviewSection";

const GameInfo = ({ game }) => {
    return (
        <Row justify="center" style={{ "padding": "10px 0px 25px" }}>
            <Col span={20}>
                <Row justify="space-between" gutter={[0, 24]}>
                    <Col xl={15}>
                        <GameOverviewSection game={game} />
                    </Col>
                    <Col id={styles.section} xl={8}>
                        <GameInfoSection game={game} />
                        {game.minimum_system_requirements && <SystemRequirementsSection systemRequirements={game.minimum_system_requirements} />}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default GameInfo;