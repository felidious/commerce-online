import React from 'react'
import { TextField, Grid, Input, Select, MenuItem } from '@material-ui/core';
import { useFormContext, Controller, useForm } from 'react-hook-form';

const FormInput = ({name,label}) => {
    const { control } = useFormContext();
    return (
        <Grid type xs={12} sm={6}>
        
   <Controller
            render={({ methods }) => (
              <TextField {...methods} as={TextField} 
                  control={control} 
                  fullWidth
                  defaultValue=''
                   name={name}
                   label={label} 
                  required >
              </TextField>
            )}
             />
          

 </Grid>
    )
}

export default FormInput
