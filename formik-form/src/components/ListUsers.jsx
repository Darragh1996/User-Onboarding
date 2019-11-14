import React from "react";

function List(props) {
  console.log(props.users);
  return (
    <div>
      {props.users ? (
        props.users.map(user => {
          return <h3>{user.name}</h3>;
        })
      ) : (
        <h3>no users</h3>
      )}
    </div>
  );
}

export default List;
