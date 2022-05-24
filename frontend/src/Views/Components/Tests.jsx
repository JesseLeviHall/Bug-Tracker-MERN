import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBugsError,
  getBugsStatus,
  selectAllBugs,
} from "../../Controllers/Reducers/bugSlice";

export default function Home() {
  const dispatch = useDispatch();

  const bugs = useSelector(selectAllBugs);
  const bugStatus = useSelector(getBugsStatus);
  const error = useSelector(getBugsError);

  useEffect(() => {
    if (bugStatus === "idle") {
    }
    dispatch(getAll());
  }, []);

  if (loading) return <p>Loading...</p>;

  console.log(entities);

  return (
    <div>
      <h2>These are the bugs</h2>
      {entities.map((bug) => (
        <p key={bug.id}>{bug.name}</p>
      ))}
    </div>
  );
}
