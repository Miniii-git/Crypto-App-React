const convertDataForPloting = (data, type) => {
  const listOfObj = data[type].map((array) => {
    return {
      time: array[0],
      [type]: array[1],
    };
  });
  return listOfObj;
};

export { convertDataForPloting };
