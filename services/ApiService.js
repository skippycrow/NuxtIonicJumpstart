/*
USAGE:
import ApiService from "~/services/ApiService";

const response = await ApiService.get("/endpoint");
const response = await ApiService.post("/endpoint", data);
const response = await ApiService.put("/endpoint", data);
const response = await ApiService.delete("/endpoint");

*/

class ApiService {
  constructor() {
    this.config = useRuntimeConfig();
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  setHeaders() {
    // TODO: AUTH
    ApiService.headers.set("Authorization", "AUTH HERE");
  }

  async get(resource) {
    if (resource.charAt(0) === "/") {
      resource = resource.slice(1);
    }
    const response = await fetch(
      `${this.config.public.apiBaseUrl}/${resource}`,
      {
        method: "GET",
        headers: ApiService.headers,
      }
    );
    return await response.json();
  }

  async post(resource, data) {
    if (resource.charAt(0) === "/") {
      resource = resource.slice(1);
    }
    const response = await fetch(
      `${this.config.public.apiBaseUrl}/${resource}`,
      {
        method: "POST",
        headers: ApiService.headers,
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  }

  async put(resource, data) {
    if (resource.charAt(0) === "/") {
      resource = resource.slice(1);
    }
    const response = await fetch(
      `${this.config.public.apiBaseUrl}/${resource}`,
      {
        method: "PUT",
        headers: ApiService.headers,
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  }

  async delete(resource) {
    if (resource.charAt(0) === "/") {
      resource = resource.slice(1);
    }
    const response = await fetch(
      `${this.config.public.apiBaseUrl}/${resource}`,
      {
        method: "DELETE",
        headers: ApiService.headers,
      }
    );
    return await response.json();
  }
}

const apiService = new ApiService();

export default apiService;
