import {useRootContext} from '../stores/RootStore'

export const useBookInFavoriteAndInRead = () => {
    const {user} = useRootContext().userStore
    const {currentBook} = useRootContext().bookStore

    if (user && currentBook) {
        const {id} =currentBook
        return [user.favorite.includes(id), user.markedAsRead.includes(id) ]
    } else return [false, false]
}