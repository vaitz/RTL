import { SERVER_ADDRESS } from "../../../utils/config";

export const changePassRequest = async (username, oldPassword, newPassword) => {
  const data = {
    username: username,
    old_password: oldPassword,
    new_password: newPassword,
  };
  const res = await fetch(SERVER_ADDRESS + "/users/changePsw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  });
  console.log("post", res);
  return res;
};
