import { getUsers } from "../../api";
import "./UsersList.css";
import { useState, useEffect } from "react";
import { Loading } from "../Loading/Loading";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { UserCard } from "../UserCard/UserCard";

export const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((data) => {
        setUsersList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.msg);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <>
      <ul>
        {usersList.map((user) => {
          return <UserCard user={user} key={user.username} />;
        })}
      </ul>
    </>
  );
};
