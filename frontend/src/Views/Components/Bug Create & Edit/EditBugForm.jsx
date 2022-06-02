import React, { useState } from "react";
import {
  selectBugById,
  updateBug,
  deleteBug,
} from "../../../Controllers/Reducers/bugSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditBugForm = () => {
  const { bugId } = useParams();

  const bug = useSelector((state) => selectBugById(state, Number(bugId)));

  if (!bug) {
    return (
      <section>
        <h2>Bug not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <h1>Edit Bug Form</h1>
    </div>
  );
};

export default EditBugForm;
