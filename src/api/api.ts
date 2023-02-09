import axios from "axios";

export const BaseUrl = 'https://localhost:5000/api'

export const api = axios.create({
  baseURL: BaseUrl,
})