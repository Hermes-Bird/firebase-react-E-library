import React from 'react'
import {FormControl, Icon, InputAdornment, InputLabel, OutlinedInput, TextField} from '@material-ui/core'



const SearchBar: React.FC<{}> = () => {
    return (
        <div style={{marginTop: '40px'}}>
            <FormControl fullWidth>
                <TextField
                    variant="outlined"
                    label="Type name of your book"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Icon>search</Icon></InputAdornment>,
                    }}
                />
            </FormControl>
        </div>
    )
}

export default SearchBar
