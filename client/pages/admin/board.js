import { useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { createBoard } from "../../actions/board";

const Editor = dynamic(() => import("../../components/board/index"), {
  ssr: false,
});

const AdminContainer = styled.div`
  margin-top: 9rem;
  width: 100%;
  min-height: 100vh;
`;

const AdminWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const AdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 5rem;
    font-weight: bolder;
    margin: 3rem 0;
  }

  button {
    width: 15rem;
    height: 5rem;
    font-size: 2rem;
    border: none;
    color: white;
    background-color: black;
    border-radius: 2rem;
    cursor: pointer;
  }

  @media all and (max-width: 692px) and (max-width: 450px) {
    h1 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 3rem;
      font-weight: bolder;
      margin: 3rem 0;
    }

    button {
      width: 12rem;
      height: 3rem;
      font-size: 1.2rem;
      border: none;
      color: white;
      background-color: black;
      border-radius: 2rem;
      cursor: pointer;
    }
  }

  @media all and (max-width: 449px) {
    flex-direction: column;
  }
`;

const AdminTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 3rem;
    font-weight: bolder;
    margin: 0;
  }

  input {
    padding: 1rem;
  }
`;

const Admin = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      body: body,
    };
    createBoard(data);
    // console.log(title);
    // console.log(body);
  };

  return (
    <AdminContainer>
      <AdminWrapper>
        <AdminHeader>
          <h1>게시물업로드</h1>
          <button onClick={handleSubmit}>생성하기</button>
        </AdminHeader>
        <AdminTitleWrapper>
          <h1>제목</h1>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="제목을 입력해주세요..."
            required
          />
        </AdminTitleWrapper>
        <Editor setBody={setBody} />
      </AdminWrapper>
    </AdminContainer>
  );
};

export default Admin;
