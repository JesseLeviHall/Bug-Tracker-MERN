import bugModel from "../../Models/bugModel";

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugModel({
      _id: 123465060,
      name: "crash on load",
      details: "crashes after 3 seconds",
      steaps: "open app and it will crash",
      version: "v2.0",
      assigned: "jess man",
      priority: 1,
      time: "23: 38",
    })
  );
  data.push(
    new bugModel({
      _id: 123421111061,
      name: "wontload",
      details: "crashes after 3 seconds",
      steaps: "open app and it will crash",
      version: "v2.0",
      assigned: "jess man",
      priority: 3,
      time: "23: 38",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
