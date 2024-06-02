import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionChangePosts } from "./store/reducers/posts";
import { api } from "./utils/api";
import { actionChangeUsers } from "./store/reducers/users";
import { Grid } from "@mui/material";
import Mainpage from "./Components/mainpage";

function App() {
  const dispatch = useDispatch();

  const getPosts = async () => {
    const posts = await api.get("https://maqe.github.io/json/posts.json");
    dispatch(actionChangePosts(posts.data));
  };

  const getAuthors = async () => {
    const authors = await api.get("https://maqe.github.io/json/authors.json");
    dispatch(actionChangeUsers(authors.data));
  };

  useEffect(() => {
    getPosts();
    getAuthors();
  }, []);

  return (
    <Grid
      container
      width="100%"
      height="100%"
      justifyContent="center"
      sx={{ backgroundColor: "#eeeeee" }}
    >
      <Mainpage />
    </Grid>
  );
}

export default App;
