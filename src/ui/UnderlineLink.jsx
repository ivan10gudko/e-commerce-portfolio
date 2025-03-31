/* eslint-disable react/prop-types */
import { Link } from "react-router";

function UnderlineLink(props) {
  const { color = "black", to, children } = props;
  console.log("color: " + color);
  const styles = `text-sm font-urbanist font-bold uppercase text-${color} relative after:content-[''] after:absolute after:w-full  after:block after:h-[2px] ${
    color == "black" ? "after:bg-black" : "after:bg-white"
  } hover:after:scale-x-[.60] after:transition-all after:duration-200 after:delay-100 after:ease-linear `;
  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
}

export default UnderlineLink;
