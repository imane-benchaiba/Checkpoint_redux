import constants from "../Constants/nameConstants";

const changeName = (name) => {
  return {
    type: constants.CHANGE,
    payload: name,
  };
};

const resetName = () => {
  return {
    type: constants.RESET,
  };
};

export default {
  changeName,
  resetName,
};
