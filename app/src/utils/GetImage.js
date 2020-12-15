import reactImg from "../assets/react.png";
import androidImg from "../assets/android.gif";
import nodeImg from "../assets/node.png";
import iosImg from "../assets/ios.png";
import fullstackImg from "../assets/full-stack.png";
import placeholder from "../assets/placeholder.png";

const getImage = (title) => {
  let img;
  if (title.includes("React")) {
    img = reactImg;
  } else if (
    title.includes("Fullstack") ||
    title.includes("Full Stack") ||
    title.includes("Full-stack") ||
    title.includes("Full-Stack") ||
    title.includes("Java") ||
    title.includes("Python")
  ) {
    img = fullstackImg;
  } else if (title.includes("iOS")) {
    img = iosImg;
  } else if (
    title.includes("Node") ||
    title.includes("Backend") ||
    title.includes("API")
  ) {
    img = nodeImg;
  } else if (title.includes("Android")) {
    img = androidImg;
  } else {
    img = placeholder;
  }
  return img;
};

export default getImage;
