export const getCircleStyle = (index: number, value: number) => {
  if (index === 0)
    return {
      backgroundColor: value === 10 ? "#D45A2B" : "black",
      color: "white",
    };
  return { border: "1px solid black", backgroundColor: "transparent" };
};
