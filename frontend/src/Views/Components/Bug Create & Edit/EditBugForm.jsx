import React, { useState } from "react";
import {
  selectBugById,
  updateBug,
  deleteBug,
} from "../../../Controllers/Reducers/bugSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const EditBugForm = () => {
  return (
    <div>
      <h1>Edit Bug Form</h1>
    </div>
  );
};

export default EditBugForm;
