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

export default async function middleware(req) {
  const url = req.url;
  const accessToken = req.cookies.get("access_token");
  const validateToken = await validateAccessToken(accessToken);

  if (url.includes("/protected") && !validateToken) {
    return NextResponse.redirect("https://finnotodocs.vercel.app/login/login");
  }

  if (url.includes("/protected") && validateToken) {
    return NextResponse.redirect(
      "https://finnotodocs.vercel.app/protected/readme"
    );
  }

  // If no redirection conditions are met, allow the request to proceed
  return NextResponse.next();
}
