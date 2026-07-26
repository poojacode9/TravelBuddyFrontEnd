import api from "./api";

export const loginUser = (loginData) => {
  return api.post("/users/login", loginData);
};

export const getCurrentUser = (token) => {
  return api.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};