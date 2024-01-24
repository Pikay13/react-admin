const formatDate = (date) => {
  const timestamp = date;

  const dateObject = new Date(timestamp * 1000);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const formattedDate = `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;

  return formattedDate;
};

export default formatDate;
