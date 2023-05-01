import React from "react";
import { Redirect, useHistory } from "react-router-dom";

function Home({ isLoggedIn }) {
  const history = useHistory();

  if (!isLoggedIn) return <Redirect to="/login" />;

  function generateNewItemId() {
    // generate a random ID by concatenating a timestamp with a random number
    const timestamp = Date.now().toString(16);
    const random = Math.floor(Math.random() * 0xffffffff).toString(16);
    return `${timestamp}-${random}`;
  }

  function handleCreateItem() {
    // code to create new item
    const newItemId = generateNewItemId();
    console.log("New Item Created Successfully");
    // navigate to detail page for newly created item
    history.push(`/item/${newItemId}`);
  }

  return (
    <div>
      <h1>Home!</h1>
      <button onClick={handleCreateItem}>Create Item</button>
    </div>
  );
}

export default Home;
