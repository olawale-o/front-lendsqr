const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.substr(1).toLowerCase();

export const titlelize = (str) => {
  const pattern = /\s/g;
  if(pattern.test(str)) return str.split(' ').map(capitalizeFirstLetter).join(" ");
  return capitalizeFirstLetter(str);
};
