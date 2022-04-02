const axios = require("axios");
const test = async (
  message = `test BOT by YUT`,
  token = "my token"
) => {
  await axios({
    method: "post",
    url: "https://notify-api.line.me/api/notify",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + token,
    },
    data: `message=${message}`,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

test();
