const colors = ["#b33a3a", "#ff6700", "#32cd32"];

const PriorityContoller = (priority) => {
  const level = ["High", "Moderate", "Low"];
  return {
    level: level[priority - 1],
    color: colors[priority - 1],
  };
};

export default PriorityContoller;
