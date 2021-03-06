module.exports = function(context, options) {
  return {
    name: "docusaurus-baidu-analytics-plugin",
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?941da2aae9293653562b42ce49eab250";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `
          },
          {
            tagName: "meta",
            attributes: {
              name: "baidu-site-verification",
              "rel": ["preload", "preconnect", "dns-prefetch"],
              content: "code-ayzAPFnBLG"
            }
          }
        ]
      };
    }
  };
};
