import { Button } from "@mui/material";

function PrimerButton(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={false}
      className="!py-2.5 !px-3 w-full !shadow-none !rounded-lg text-center !text-base !text-white !normal-case duration-100 !font-SFProDisplay !font-semibold"
      {...props}
    // eslint-disable-next-line react/prop-types
    >{props.children}</Button>
  );
}

export default PrimerButton;
