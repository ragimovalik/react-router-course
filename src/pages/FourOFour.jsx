import { Link } from "react-router-dom";

const stylesLinkButton = {
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  border: "none",
  padding: ".75rem 1.375rem",
  color: "initial",
  fontWeight: 700,
  borderRadius: "5px",
  cursor: "pointer",
  transition: "transform .1s ease-in-out"
};

const FourOFour = () => {
  return (
    <>
      <h1>Not Found</h1>
      <p>Sorry, the page you were looking for was not found</p>

      <Link style={stylesLinkButton} to="/">
        Return to home
      </Link>
    </>
  );
};

export default FourOFour;
