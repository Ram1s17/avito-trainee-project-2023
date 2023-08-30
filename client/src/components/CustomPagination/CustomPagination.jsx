import React from "react";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";
import { changePage } from "../../store/optionsSlice"

const CustomPagination = ({ totalCount }) => {
    const dispatch = useDispatch();

    return (
        <Pagination
            onChange={(page) => dispatch(changePage(page))}
            showSizeChanger={false}
            defaultCurrent={1}
            defaultPageSize={6}
            total={totalCount}
            style={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                fontSize: "16px",
                padding: "15px 5px"
            }}
        />
    );
};

export default CustomPagination;