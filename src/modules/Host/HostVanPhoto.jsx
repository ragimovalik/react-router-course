import { useOutletContext } from "react-router-dom";

const HostVanPhoto = () => {
  const { vanToRender } = useOutletContext();

  const styles = {
    width: "600px",
    marginInline: "auto"
  };

  return (
    <div style={styles}>
      <h2>Host Van Photo</h2>
      <img src={vanToRender.imageUrl} alt="" />
    </div>
  );
};

export default HostVanPhoto;
