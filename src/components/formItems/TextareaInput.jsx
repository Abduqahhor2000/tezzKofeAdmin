import {
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
function TextareaInput({label, ...props}) {
  return (
    <div>
      <FormControl
        sx={{ width: "100%" }}
        variant="standard"
      >
        <FormHelperText className="!mt-0 !leading-[14px] !mb-1 !ml-2" id="outlined-weight-helper-text">{label}</FormHelperText>
        <OutlinedInput
          id="outlined-adornment-weight"
          multiline
          maxRows={4}
          rows={4}
          {...props}
          size="small"
          className="!text-base !leading-5 py-0.5 !pl-2 !font-SFProDisplay !font-normal"
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
    </div>
  );
}

export default TextareaInput;
