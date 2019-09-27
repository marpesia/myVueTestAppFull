import { AxiosInstance } from "axios";
import { LoginInput } from "./types";
import { Login } from "@/domain";

export default (client: AxiosInstance) => ({
  login(input: LoginInput) {
    console.log("login service", input);
    return client.post("login", input).then(
      (data: any): Login => {
        console.log("DATA", data);
        return data;
      }
    );
  }
});
