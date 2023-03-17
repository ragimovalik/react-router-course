import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { vanToRender } = useOutletContext();

  return (
    <>
      <h2>Host Van Pricing</h2>

      <p>
        Price: <span>{vanToRender.price}</span>/Day
      </p>
    </>
  );
};

export default HostVanPricing;
