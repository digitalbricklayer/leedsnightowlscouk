export default {
  async fetch(request) {
    const externalHostname = "leedsnightowls.com";
    
    // Redirect request as is except to new website
    const default_redirect = request.url.replace("leedsnightowls.co.uk", externalHostname);
    return Response.redirect(default_redirect, 301);
  },
};
