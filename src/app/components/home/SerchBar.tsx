import React from 'react'
import { FormControl, Icon, InputAdornment, TextField } from '@material-ui/core'

const SearchBar: React.FC<{}> = () => {
    return (
        <div>
            <FormControl fullWidth>
                <TextField
                    variant="outlined"
                    label="Type name of your book"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>search</Icon>
                            </InputAdornment>
                        )
                    }}
                />
            </FormControl>
        </div>
    )
}

export default SearchBar
