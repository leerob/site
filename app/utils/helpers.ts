
function getWebAddress() : string {
  return process.env.WEB_ADDRESS || "https://heemankv.com"
}


const SOCIAL_MEDIA = {
  twitter: "https://x.com/heemankv",
  linkedin: "https://www.linkedin.com/in/heemankv",
  github: "https://github.com/heemankv",
}

export { getWebAddress, SOCIAL_MEDIA };