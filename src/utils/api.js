import axios from "axios";

export const api = {
  get: async (url) => {
    let data;
    await axios({
      method: "get",
      url: url,
    }).then(function (response) {
      //   console.log("res", response.data);
      data = response;
    });
    return data;
  },
};
