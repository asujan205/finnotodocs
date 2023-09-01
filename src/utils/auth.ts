export async function validateAccessToken(accessToken: string) {
  try {
    const response = await fetch("https://meta.finnoto.dev/auth", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error during token validation:", error);
    return false;
  }
}
