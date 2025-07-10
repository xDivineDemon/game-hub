import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7dbf7e79368c429889805124d8eed3de",
  },
});
