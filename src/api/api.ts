import axios from "axios";
import { BaseUrl } from "./BaseUrl";

export const api = axios.create({
  baseURL: BaseUrl,
})