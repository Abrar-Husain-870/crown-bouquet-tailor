/**
 * Netlify Serverless Function: GET /.netlify/functions/config
 * Returns current environment variables dynamically at runtime without requiring a rebuild.
 */
exports.handler = async () => {
  const env = {
    MAPS_URL: process.env.MAPS_URL || "",
    INSTAGRAM_URL: process.env.INSTAGRAM_URL || "",
    INSTAGRAM_ID: process.env.INSTAGRAM_ID || "",
    PHONE_NUMBER: process.env.PHONE_NUMBER || "",
    DISPLAY_PHONE: process.env.DISPLAY_PHONE || "",
    WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER || "",
    WHATSAPP_MESSAGE: process.env.WHATSAPP_MESSAGE || "",
    SHOP_ADDRESS: process.env.SHOP_ADDRESS || ""
  };

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60", // Cache for 60 seconds
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(env)
  };
};

