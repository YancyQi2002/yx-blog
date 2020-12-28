module.exports = function(context, options) {
  return {
    name: "docusaurus-google-adsense-plugin",
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            attributes: {
              "data-ad-client": "ca-pub-2500903599637609",
              async: true,
              src:
                "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            }
          }
        ]
      };
    }
  };
};
