const humanizeString = string => {
  let loweredString = string.toLowerCase();
  let capitalizedFirstChar = loweredString[0].toUpperCase() + loweredString.substr(1);
  const replaceUnderscoreWithSpace = capitalizedFirstChar.replace(/_/g, ' ');

  return replaceUnderscoreWithSpace;
};
const mapCountryCode = (countryCodeList) => {
  return Object.keys(countryCodeList).map(key => {
    return {
      value: countryCodeList[key],
      display: humanizeString(key),
    }
  });
}

export default mapCountryCode;