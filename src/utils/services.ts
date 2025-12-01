import { jwtDecode } from "jwt-decode";
type decodeData = {
  userId: string;
};
export const formatDate = (iso: string) => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

export const authanticateRequest = () => {
  const { token, auth } = JSON.parse(localStorage.getItem("token") || "{}");
  const decoded: decodeData = jwtDecode(token);
  if (decoded?.userId) {
    const check = decoded?.userId === auth;
    return check;
  } else {
    return false;
  }
};
