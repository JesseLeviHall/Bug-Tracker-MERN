import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../Controllers/Reducers/bugSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.bugs);

  useEffect(() => {
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
