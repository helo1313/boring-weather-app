const validateResponseData: (data: any) => void = (data) => {
  if (data.list.length === 0) {
    console.log("throw error");
    throw new Error("City with that name does not exist");
  }
};

export default validateResponseData;
