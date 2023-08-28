import { NextResponse } from "next/server";

export async function validateAccessToken(accessToken) {
  try {
    const response = await fetch("https://meta.finnoto.dev/auth", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.ok;
  } catch (error) {
    console.error("Error during token validation:", error);
    return false;
  }
}

export default function middleware(req) {
  const url = req.url;
  const accessToken = req.cookies.get("access_token");
  const validateToken = validateAccessToken(accessToken);

  if (url.includes("/protected") && !validateToken) {
    NextResponse.redirect("/login");
  }

  if (url.includes("/login") && validateToken) {
    NextResponse.redirect("/protected/readme");
  }
}
