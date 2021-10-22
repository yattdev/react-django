import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com/users/yattdev";
const MultipleReturns = () => {
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        const { login } = resp.data;
        console.log(resp.data);
        setUser(login);
        setIsLoad(false);
      })
      .catch((error) => {
        setIsLoad(false);
        setIsError(true);
        // console.log(error);
      });
  }, []);

  if (isLoad) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div>Error ! SOmething wrong</div>
      </>
    );
  }

  return (
    <>
      <div>
        <h2>{user}</h2>
      </div>
    </>
  );
};

export default MultipleReturns;
