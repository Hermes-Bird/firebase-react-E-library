import React from 'react'
import { FormControl, Icon, InputAdornment, TextField } from '@material-ui/core'
import {useRootContext} from '../../stores/RootStore'

const SearchBar: React.FC = () => {
    const {searchBooks} = useRootContext().bookStore

    return (
        <div>
            <FormControl fullWidth>
                <TextField
                    variant="outlined"
                    onChange={(e) => {
                        searchBooks(e.target.value)
                        console.log(e.target.value)
                    }}
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
