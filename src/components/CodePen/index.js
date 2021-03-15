import React from "react";
import PropTypes from "prop-types";
import useThemeContext from "@theme/hooks/useThemeContext";

function index({ slug, title, height = "600px" }) {
  const { isDarkTheme } = useThemeContext();
  let themedSrc = `https://codepen.io/yancyqi2002/embed/preview/${slug}?height=807&theme-id=light&default-tab=css,result`;
  return (
    <div>
      <iframe
        src={themedSrc}
        style={{
          width: "100%",
          height: "600px",
        }}
        title={title}
        frameborder="no"
        loading="lazy"
        allowtransparency="true"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
}

index.propTypes = {};

export default index;
