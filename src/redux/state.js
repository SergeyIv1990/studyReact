let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Sergey' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'Natasha' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Zina' },
                { id: 6, name: 'Lina' }
            ],
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'Hi' },
                { id: 3, message: 'How are you' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Thank you' },
                { id: 6, message: 'Ulalala' }
            ]
        },
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you', likesCount: '10' },
                { id: 2, message: 'My first message', likesCount: '12' },
                { id: 3, message: 'How are you', likesCount: '8' },
                { id: 4, message: 'Hi-fi', likesCount: '11' },
                { id: 5, message: 'Foll good icr', likesCount: '16' },
                { id: 6, message: 'First', likesCount: '7' }
            ],
            newPostText: 'it-camasutra.com'
        }
    },
    _callSubscriber() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

 /*   addPost() {
        let newPost = {
            id: 7,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
*/
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },

}



export default store;
window.store = store;