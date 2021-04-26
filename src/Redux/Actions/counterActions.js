import constants from "../Constants/counterConstants";

const addToCounter = () => {
  return {
    type: constants.ADD,
  };
};

const removeFromCounter = () => {
  return {
    type: constants.MINUS,
  };
};

export default {
  addToCounter,
  removeFromCounter,
};
