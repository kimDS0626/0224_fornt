import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";


import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "react-js-pagination";

function CommentList(props) {
  const reviewId = props.reviewId
  console.log(reviewId);

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCnt, settotalCnt] = useState(0);
    const [totalPage, settotalPage] = useState(5);
    const [commentList, setCommentList] = useState([]);

    const getCommnetListRef = useRef(null);

    const changePage = (page) => {
        setPage(page);
        getCommnetList(page);
        getCommnetListRef.current(page);

    }

    const getCommnetList = async (page) => {
        await axios
            .get(`/api/review/${reviewId}/comment/list`, { params: { page: page - 1 }, })
            .then((response) => {
                console.log("CommnetList success", response);

                setPageSize(response.data.pageSize);
                settotalCnt(response.data.totalElements);
                settotalPage(response.data.totalPage);
                setCommentList(response.data.content);
            })
            .catch((error) => {
                console.log("CommnetList error", error);
            })
    };

    useEffect(() => {
        getCommnetListRef.current = getCommnetList;
        getCommnetList(1);
    }, [reviewId]);
  
  return (
      <Container>
          {commentList.map(function (commnet, index) {
              return (
                <CommentBox key={index}>
                      <Comment
                          obj={commnet}
                          key={index}
                          page={page}
                          getCommnetList={getCommnetListRef.current}
                      >
                  </Comment>  
                  
                </CommentBox>
              );
          })}
      
      <PaginationBox>
        <Pagination
          className="pagination"
          activePage={page}
          itemsCountPerPage={pageSize}
          totalItemsCount={totalCnt === 0 ? 1 : totalCnt}
          prevPageText={"<"}
          nextPageText={">"}
          onChange={changePage}
        />
      </PaginationBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentBox = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  
  align-items: center;
  gap: 20px;
  padding 10px;
`

const CommentInput = styled.textarea`
  width:100%;
  max-width: 900px;
  min-height: 50px;
  padding: 5px;
  font-size: 12px;
  font-weight: 300;
  font-family: "Noto Sans KR", serif;
  outline: none;
  resize: none;
  overflow-x: hidden;
`

const WriteBtn = styled.button`
    width:50px;
    height: 30px;
    border:1px solid #111111;
`
const PaginationBox = styled.div`
  padding: 10px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 50px;
  background-color: #ffffff;
  flex-direction: row;

  .pagination {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .pagination li {
    display: inline-block;
    margin: 0 5px;
  }
`;

export default CommentList;