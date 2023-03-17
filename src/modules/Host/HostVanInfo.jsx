import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { vanToRender } = useOutletContext();

  const styles = { width: "600px", marginInline: "auto" };

  return (
    <div style={styles}>
      <h2>Host Van Info</h2>
      <p>{vanToRender.description}</p>
    </div>
  );
};

export default HostVanInfo;
