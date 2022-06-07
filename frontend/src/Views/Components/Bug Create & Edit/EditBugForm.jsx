import React, { useState, useEffect } from "react";
import {
  selectBugById,
  updateBug,
  deleteBug,
} from "../../../Controllers/Reducers/bugSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditBugForm = (props) => {
  const { bugId } = useParams();
  const dispatch = useDispatch();

  const updateThisBug = useSelector((state) =>
    selectBugById(state, Number(bugId))
  );

  if (!updateThisBug) {
    return (
      <div>
        <h2>Bug not found!</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit Bug Form To Update and assign </h1>
    </div>
  );
};

export default EditBugForm;
