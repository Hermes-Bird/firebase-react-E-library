import { Grid } from '@material-ui/core'
import React from 'react'
import BookPageHeader from '../components/book/BookPageHeader'
import { IBookListItemProps } from '../components/profile/BookListItem'
import ProfileBookList from '../components/profile/ProfileBookList'
import ProfileForm from '../components/profile/ProfileForm'
import ProfilePictureContainer from '../components/profile/ProfilePictureContainer'

import '../styles/profilePage.css'

const jotaroUrl =
    'http://img10.reactor.cc/pics/post/full/Anime-Jotaro-Kujo-JoJo%27s-Bizarre-Adventure-r63-4524855.jpeg'

interface IUserProfileProps {
    avatarUrl: string
}

const userProfile: IUserProfileProps = {
    avatarUrl: jotaroUrl
}


const algeron = 'https://img1.od-cdn.com/ImageType-400/1694-1/E57/F99/64/{E57F9964-4362-4702-8A1D-B816679AA6FB}Img400.jpg'

const bookItems: IBookListItemProps[] = [
    {
        imageUrl: algeron,
        title: 'Flowers for Algeron'
    },
    {
        imageUrl: algeron,
        title: 'Flowers for Algeron'
    },
    {
        imageUrl: algeron,
        title: 'Flowers for Algeron'
    }
]

const ProfilePage = () => {
    return (
        <div>
            <BookPageHeader />
            <Grid container className="profile__grid-container">
                <Grid item container alignContent="center" direction="column" xs={12} sm={4} className="profile__avatar-container">
                    <ProfilePictureContainer imageUrl={userProfile.avatarUrl}/>
                </Grid>
                <Grid item container xs={12} sm={7} justify="center" direction="column">
                    <ProfileForm/>
                    <ProfileBookList listName="Favorite books" bookItems={bookItems}/>
                    <ProfileBookList listName="Marked as read" bookItems={[]}/>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default ProfilePage
