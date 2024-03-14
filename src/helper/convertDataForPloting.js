const convertDataForPloting = (data, type) => {
  const listOfObj = data[type].map((array) => {
    const date = new Date(array[0]);
    return {
      time: date.toLocaleString(),
      [type]: array[1],
    };
  });
  return listOfObj;
};

export { convertDataForPloting };
