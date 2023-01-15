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
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  dispatch(action){
    if (action.type === "ADD-POST"){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 15,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    }else if(action.type === "UPDATE-NEW-POST-TEXT"){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
};

window.state = store;
