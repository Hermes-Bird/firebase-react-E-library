import React, {useState} from 'react'
import {CircularProgress, Grid, Icon, Typography} from '@material-ui/core'
import {CollectionNames} from '../../models/User'
import {useRootContext} from '../../stores/RootStore'

const alreadyAddedStyle = {color: '#D632CE', cursor: 'default'}

interface IAddBookToCollectionButtonProps {
    collectionName: CollectionNames
    alreadyIn?: boolean
    icon: string,
    text: string
}

const AddBookToCollectionButton: React.FC<IAddBookToCollectionButtonProps> = ({alreadyIn, text, icon, collectionName}) => {
    const [isAction, setIsAction] = useState(false)
    const {currentBook} = useRootContext().bookStore
    const {addBookToCollection} = useRootContext().userStore

    const onClickHandler = () => {
        if (!alreadyIn && currentBook) {
            setIsAction(true)
            addBookToCollection(currentBook.id || null, collectionName)
                .finally(() => {
                    setIsAction(false)
                })
        }
    }

    if (isAction) {
        return (
            <Grid item container justify="center" alignItems="center">
                <CircularProgress size={23} color="primary"/>
            </Grid>
        )
    }

    return (
        <Grid onClick={onClickHandler}
              style={alreadyIn ? alreadyAddedStyle : {}}
              className="book__menu-item"
              item
              xs={6}
              sm={12}
              alignItems="center"
              justify="center" container
        >
            <Icon color="inherit" fontSize="large">{icon}</Icon>
            <Typography>
                {alreadyIn ? 'In collection' : text}
            </Typography>
        </Grid>
    )
}

export default AddBookToCollectionButton
