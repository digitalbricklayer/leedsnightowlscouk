export default {
  async fetch(request) {
    const newSite = "leedsnightowls.com";
    const oldSite = "leedsnightowls.co.uk";

    const requestURL = new URL(request.url);
    const path = requestURL.pathname;

    // Strip the leading www. from the beginning of the URL
    if (path.startsWith("https:\/\/www.")) {
      // Redirect to new site without the leading www. sub-domain
      const requestUrlWoutSubdomain = request.url.replace("https:\/\/www.", "https://");
      return Response.redirect(requestUrlWoutSubdomain, 301);
    }
    
    // Redirect request as is except to new website
    const default_redirect = request.url.replace(oldSite, newSite);
    return Response.redirect(default_redirect, 301);
  },
};
