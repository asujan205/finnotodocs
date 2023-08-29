import { NextResponse } from "next/server";
import { validateAccessToken } from "./auth";
import Cookies from "js-cookie";
export default async function middleware(req) {
  const url = req.url;
  const accessToken = Cookies.get("token");
  console.log("Access token:", accessToken);
  const validateToken = await validateAccessToken(accessToken);

  // if (url.includes("/protected") && !validateToken) {
  //   return NextResponse.redirect("http://localhost:3000/login/login");
  // }

  // if (url.includes("/protected") && validateToken) {
  //   return NextResponse.redirect("http://localhost:3000/protected/readme");
  // }

  // If no redirection conditions are met, allow the request to proceed
  return NextResponse.next();
}
