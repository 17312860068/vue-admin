export default () => {
  const NODE_ENV = process.env.NODE_ENV;
  const privateKey = "xuzhenkun";
  let mode, baseUrl;
  if (NODE_ENV === "production") {
    baseUrl = "";
    mode = "production";
  } else {
    baseUrl = "/api/";
    mode = "development";
  }
  return {
    baseUrl: baseUrl,
    mode: mode,
    privateKey: privateKey,
    domain: window.location.protocol + "//" + window.location.host,
  };
};
