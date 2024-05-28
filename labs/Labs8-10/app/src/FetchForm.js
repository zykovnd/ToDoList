import React, { useState } from "react";

export default function FetchForm() {
  const [postID, setPostID] = useState();
  const [errors, setError] = useState("");
  const [resultForm, setResultForm] = useState();

  function postIDChangeHandler(e) {
    setPostID(e.target.value);
  }

  function isValid() {
    if (!postID) {
      setError("ID обязателен");
      return false;
    }
    return true;
  }

  async function submitFormHandler(e) {
    e.preventDefault();
    setError("");
    if (isValid()) {
      try {
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postID}`
        );
        if (postResponse.status !== 200) {
          throw Error(postResponse.statusText);
        }

        const postData = await postResponse.json();

        let userID = postData.userId;
        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userID}`
        );
        let userData = await userResponse.json();
        if (userData) {
          setResultForm({
            title: postData.title,
            body: postData.body,
            name: userData.name,
            email: userData.email,
          });
        }
      } catch (e) {
        if (e instanceof Error) {
          setError('Ресурса не существует');
        }
      }
    }
  }

  return (
    <div>
      <input
        type="number"
        name="postID"
        value={postID}
        onChange={postIDChangeHandler}
        placeholder="Введите ID поста"
      />
      <button type="submit" onClick={submitFormHandler}>
        Найти
      </button>
      {errors !== "" && <span style={{ color: "red" }}>{errors}</span>}
      <label>
        Результат:
        {resultForm && (
          <div>
            <p>title: {resultForm.title}</p>
            <p>body: {resultForm.body}</p>
            <p>name: {resultForm.name}</p>
            <p>email: {resultForm.email}</p>
            <p>{resultForm.email}</p>
          </div>
        )}
      </label>
    </div>
  );
}
