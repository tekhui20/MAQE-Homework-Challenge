import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { postsData } from "../../store/reducers/posts";
import Cards from "../cards";

export default function Mainpage() {
  const [postLists, setPostLists] = useState([]);
  const posts = useSelector(postsData);

  useEffect(() => {
    setPostLists(posts);
  }, [posts]);

  return (
    <Grid container width="80%" direction="column" sx={{}}>
      <Typography variant="h4" mt="5%" fontWeight={700} sx={{}}>
        MAQE Forum
      </Typography>
      <Typography variant="h6" mt="3%">
        Your current timezone is: Asia/Bangkok
      </Typography>
      <Grid container direction="column" gap="1em" mt="1em">
        {postLists?.map((item, i) => {
          return (
            <Cards data={item} key={`card#${i}`} evenBgColor={i % 2 != 0} />
          );
        })}
      </Grid>
    </Grid>
  );
}
