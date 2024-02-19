import { Checkbox, FormControlLabel } from "@mui/material"

function CheckBox() {
  return (
    <div>
        <FormControlLabel  control={<Checkbox className="!p-0 !m-0 !ml-2 block" />} label={<span className="!text-xs !leading-[14px] !font-semibold">Umumiy</span>} />
    </div>
  )
}

export default CheckBox