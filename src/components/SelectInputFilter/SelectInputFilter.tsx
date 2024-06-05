import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type Option = {
  value: string;
  label: string;
}

export const SelectInputFilter = ({ onChange, label, options }: {
  label: string
  options: Option[],
  onChange: (value: string) => void
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="selectLabel">{label}</InputLabel>
      <Select
        sx={{
          width: "200px",
          height: "50px"
        }}
        defaultValue={""}
        labelId={'selectLabel'}
        label={label}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      >
        {options.map((option, id) => (
          <MenuItem key={id} value={option.value}>{option.label}</MenuItem>
        ))}


      </Select>
    </FormControl>
  )
}


