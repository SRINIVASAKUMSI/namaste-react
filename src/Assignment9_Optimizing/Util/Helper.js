export const filterData = (searchText, cardResponseObject) => {
  const response = cardResponseObject.filter((card) =>
    card.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("filerdata response - " + cardResponseObject);
  return response;
};
