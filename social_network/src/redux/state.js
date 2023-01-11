let rerenderEntireTree = () => {
  console.log("State changed");
};

export let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 15,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

window.state = state;

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
