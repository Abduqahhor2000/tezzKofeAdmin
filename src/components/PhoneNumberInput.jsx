import { forwardRef } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  input: {
    backgroundColor: '#fff'
  }
}))

const phoneNumberInput = (props, ref) => {
    const classes = useStyles()
  return (
    <TextField
      {...props}
      InputProps={{
        className: classes.input
      }}
      inputRef={ref}
      fullWidth
      size='small'
      label='Phone Number'
      variant='outlined'
      name='phone'
    />
  )
}
  
// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(phoneNumberInput)