import { Grid, List, Typography } from '@material-ui/core'
import React from 'react'
import PageHeader from '../components/utils/PageHeader'
import PictureContainer from '../components/utils/PictureContainer'

import '../styles/profilePage.css'
import '../styles/bookPage.css'
import AdminEditForm from '../components/admin/AdminEditForm'
import { renderComments } from '../components/book/BookCommentarySection'

// const comments = [
//     {
//         avatarUrl:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CheHigh.jpg/1200px-CheHigh.jpg',
//         userName: 'Che Guevarra',
//         edit: true,
//         commentText:
//             'Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze '
//     },

//     {
//         avatarUrl:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CheHigh.jpg/1200px-CheHigh.jpg',
//         userName: 'Che Guevarra',
//         edit: true,
//         commentText:
//             'Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze '
//     },

//     {
//         avatarUrl:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CheHigh.jpg/1200px-CheHigh.jpg',
//         userName: 'Che Guevarra',
//         edit: true,
//         commentText:
//             'Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze Yare Yare Daze '
//     }
// ]

const comments: [] = []

const TEST_URL =
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b925e785-3e47-42c3-8110-f2743254296d/daib59s-fc93fa6e-1b1f-4f46-acae-384046c56002.png/v1/fill/w_750,h_1000,q_80,strp/loli_jotaro_by_krokobyaka_daib59s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDAwIiwicGF0aCI6IlwvZlwvYjkyNWU3ODUtM2U0Ny00MmMzLTgxMTAtZjI3NDMyNTQyOTZkXC9kYWliNTlzLWZjOTNmYTZlLTFiMWYtNGY0Ni1hY2FlLTM4NDA0NmM1NjAwMi5wbmciLCJ3aWR0aCI6Ijw9NzUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-sQ2msE-sV5oOwbp6gR3zr4VLMmqWLQd30wYBNNekqY'

const BookAdminPage = () => {
    return (
        <>
            <PageHeader />
            <Grid className="book__grid-container" container>
                <Grid container item md={4} justify="center" sm={12}>
                    <PictureContainer imageUrl={TEST_URL} />
                </Grid>
                <Grid
                    item
                    md={8}
                    sm={12}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <AdminEditForm />
                    {comments.length > 0 ? (
                        <>
                            <Typography>Book Comments:</Typography>
                            <List>{renderComments(comments)}</List>
                        </>
                    ) : null}
                </Grid>
            </Grid>
        </>
    )
}

export default BookAdminPage
