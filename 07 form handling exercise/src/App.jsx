import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(() => users.filter((item, idx) => idx != id));
  };

  return (
    <div className="h-screen w-full bg-lime-100 flex items-center justify-center p-10">
      <div className="container mx-auto">
        <Cards users={users} handleRemove={handleRemove} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
};

export default App;

// to send data from child to parent there is only one way which is to create function in parent component and call it from child component
// 20.14 26.28
