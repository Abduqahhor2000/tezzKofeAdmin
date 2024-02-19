import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";

function PasswordInput({...props}) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div>
      <FormControl
        sx={{ width: "100%"}}
        variant="outlined"
      >
        <FormHelperText className="!mt-0 !leading-[14px] !mb-1 !ml-2" id="outlined-weight-helper-text">
          Password
        </FormHelperText>
        <OutlinedInput
          placeholder="••••••••"
          id="outlined-adornment-weight"
          type={showPassword ? "text" : "password"}
          className="!text-base !leading-5 py-0.5 !pl-2"
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <img src="/src/assets/qulf.svg" alt="" />{" "}
              <span className="p-2 pl-1 text-gray-300">|</span>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          {...props}
        />
      </FormControl>
    </div>
  );
}

export default PasswordInput;
