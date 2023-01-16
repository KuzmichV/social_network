const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
      ],
      newPostText: "it.com",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Test 1" },
        { id: 4, message: "Test 2" },
        { id: 5, message: "Test 3" },
      ],
      dialogs: [
        { id: 1, name: "Vlad" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 15,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_MESSAGE_BODY:
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = "";
        this._state.dialogsPage.messages.push({ id: 6, message: body });
        this._callSubscriber(this._state);
        break;
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (messageBody) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: messageBody,
});
window.state = store;
