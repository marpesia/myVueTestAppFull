import * as appSettings from "tns-core-modules/application-settings";

import Auth from "./auth";

import axios, { AxiosInstance } from "axios/dist/axios";

export const client: AxiosInstance = axios.create({
  baseURL: "http://decathlon.projects2.kaleidos.net:55000/",
});

client.defaults.headers["Content-Type"] = "application/json";
client.defaults.headers.Accept = "application/json";

const setAuthorization = (jwtToken?: string) => {
  if (jwtToken) {
    client.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
    appSettings.setString("authToken", jwtToken);
  } else {
    delete client.defaults.headers.common.Authorization;
    appSettings.remove("authToken");
  }
};

const token: string = appSettings.getString("authToken");
if (token) {
  setAuthorization(token);
}

export default {
  setAuthorization,
  auth: Auth(client)
}
