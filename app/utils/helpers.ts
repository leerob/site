
function getWebAddress() : string {
  return process.env.WEB_ADDRESS || "https://heemankv.com"
}



export { getWebAddress };