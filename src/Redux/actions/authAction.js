/* eslint-disable arrow-parens */
export const isLogged = (isLog) => {
  return {
    type: "LOGIN",
    isLog,
  };
};
