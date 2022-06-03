import React, { useState } from "react";
import {
  selectBugById,
  updateBug,
  deleteBug,
} from "../../../Controllers/Reducers/bugSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

const EditBugForm = () => {
  const { bugId } = useParams();
  const dispatch = useDispatch();
  const navigate = Redirect();

  const updateThisBug = useSelector((state) =>
    selectBugById(state, Number(bugId))
  );
  console.log(updateThisBug);
  if (!updateThisBug) {
    return (
      <section>
        <h2>Bug not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <h1>Edit Bug Form for {updateThisBug._id}</h1>
    </div>
  );
};

export default EditBugForm;
