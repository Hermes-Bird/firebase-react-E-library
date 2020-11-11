import {Grid} from '@material-ui/core'
import React, {useEffect} from 'react'
import PageHeader from '../components/utils/PageHeader'
import ProfileBookList from '../components/profile/ProfileBookList'
import ProfileForm from '../components/forms/ProfileForm'
import PictureContainer from '../components/utils/PictureContainer'

import '../styles/profilePage.css'
import {observer} from 'mobx-react'
import {useRootContext} from '../stores/RootStore'
import {CollectionNames} from '../models/User'


const ProfilePage = () => {
    const {user, updateUserNameAndEmail, uploadUserImage} = useRootContext().userStore
    const {profileReadBooks, profileFavoriteBooks, getBooksFromCollection} = useRootContext().bookStore

    useEffect(() => {
        if (user) {
            getBooksFromCollection(user.favorite, CollectionNames.favorite)
            getBooksFromCollection(user.markedAsRead, CollectionNames.markedAsRead)
        }
    }, [user])

    return (
        <div>
            <PageHeader />
            <Grid container className="profile__grid-container">
                <Grid item container alignContent="center" direction="column" xs={12} sm={4} className="profile__avatar-container">
                    <PictureContainer imageUrl={user?.imageUrl || ''} onUpload={uploadUserImage}/>
                </Grid>
                <Grid item container xs={12} sm={7} justify="center" direction="column">
                    <ProfileForm email={user?.email || ''} userName={user?.userName || ''} onSubmit={updateUserNameAndEmail}/>
                    <ProfileBookList collectionName={CollectionNames.markedAsRead} listName="Favorite books" bookItems={profileReadBooks}/>
                    <ProfileBookList collectionName={CollectionNames.favorite} listName="Marked as read" bookItems={profileFavoriteBooks}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default observer(ProfilePage)
