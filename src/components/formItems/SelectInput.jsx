import { FormControl, FormHelperText, InputAdornment, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

function SelectInput({label, ...props}) {
  return (
    <div>
      <FormControl required sx={{ minWidth: "100%" }}>
        <FormHelperText className="!text-xs !leading-[14px] !m-0 !ml-2 !mb-1">
          {label}
        </FormHelperText>
        <Select
          size="small"
          id="demo-simple-select-required"
          //   value={age}
          //   onChange={handleChange}
          className="!text-base !leading-5 py-0.5 !pl-2"
          startAdornment={
            <InputAdornment position="start" className="!text-base !leading-5 !text-black">
              <span className="p-1 pr-0 font-light text-gray-300">|</span>
            </InputAdornment>
          }
          {...props}
        >
          <MenuItem value="" className="text-gray-400">
            None
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectInput;
