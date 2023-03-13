import React from "react";
import { FormControl } from "react-bootstrap";
import Contacts from "../Contacts/Contacts";

const AddBlog = () => {
  return (
    <div>
      <FormControl placeholder="title" />
      <FormControl placeholder="image" />
      <FormControl placeholder="price" />
    </div>
  );
};

export default AddBlog;
