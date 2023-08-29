import { NextResponse } from "next/server";

export async function validateAccessToken(accessToken) {
  try {
    const response = await fetch("https://meta.finnoto.dev/auth", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("Response from token validation:", response);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error during token validation:", error);
    return false;
  }
}

export default async function middleware(req) {
  const url = req.url;
  const accessToken = req.cookies.get("token");
  console.log("Access token:", accessToken);
  const validateToken = await validateAccessToken(accessToken);

  if (url.includes("/protected") && !validateToken) {
    return NextResponse.redirect("http://localhost:3000/login/login");
  }

  if (url.includes("/protected") && validateToken) {
    return NextResponse.redirect("http://localhost:3000/protected/readme");
  }

  // If no redirection conditions are met, allow the request to proceed
  return NextResponse.next();
}
