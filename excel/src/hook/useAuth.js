import { useState } from "react";
import { customAxios } from "../library/customAxios";

export default function useAuth() {
  const [data, setData] = useState(null);
  try {
    if (!data && localStorage.getItem("accessToken")) {
      async function fetchMyProfile() {
        const response = await customAxios.get(`user`);

        setData(response.data.user);
      }
      fetchMyProfile();
    }
  } catch (error) {
    console.log(error);
  }
  return data;
}
