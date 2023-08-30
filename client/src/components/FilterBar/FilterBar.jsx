import React from "react";
import { Row, Col, Select } from "antd";
import { genres, platforms, sortOptions } from "../../utils/utils";
import styles from "./FilterBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory, changePlatform, changeSortBy } from "../../store/optionsSlice";

const FilterBar = () => {
    const options = useSelector((state) => state.options);
    const dispatch = useDispatch();

    return (
        <Row id={styles.bar} justify="space-between" gutter={[0, 24]}>
            <Col id={styles.filterBar}>
                <p>Filter by genre: </p>
                <Select
                    value={options.genre}
                    style={{
                        "width": "150px",
                        "fontSize": "15px",
                        "marginRight": "15px"
                    }}
                    defaultValue="all"
                    onChange={(value) => dispatch(changeCategory(value))}
                    options={genres}
                />
                <p>and platform:</p>
                <Select
                    value={options.platform}
                    style={{
                        "width": "100px",
                        "fontSize": "15px"
                    }}
                    defaultValue="all"
                    onChange={(value) => dispatch(changePlatform(value))}
                    options={platforms}
                />
            </Col>
            <Col id={styles.sortBar}>
                <p>Sort by:</p>
                <Select
                    value={options.sortBy}
                    style={{
                        "width": "150px",
                        "fontSize": "15px"
                    }}
                    defaultValue="popularity"
                    onChange={(value) => dispatch(changeSortBy(value))}
                    options={sortOptions}
                />
            </Col>
        </Row>
    );
};

export default FilterBar;