import { FormControl, MenuItem, Select } from "@mui/material";
import { FormikProps } from 'formik';

type Option = {
  value: string;
  label: string;
}

export const SelectInputFilter = <FormValues,>({ formik, accessor, label, options }: {
  formik: FormikProps<FormValues>,
  accessor: keyof FormValues & string
  label: string
  options: Option[]
}) => {
  return (
    <FormControl fullWidth>
      <Select
        labelId={label}
        id={accessor}
        value={formik.values[accessor]}
        label={label}
        onChange={(e) => {
          formik.setFieldValue(accessor, e.target.value)
        }}
      >
        {options.map((option, id) => (
          <MenuItem key={id} value={option.value}>{option.label}</MenuItem>
        ))}

      </Select>
    </FormControl>
  )
}


