import React from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { postsData } from "../../store/reducers/posts";
import Cards from "../cards";

export default function Mainpage() {
  const posts = useSelector(postsData);

  return (
    <Grid container width="80%" direction="column" sx={{}}>
      <Typography variant="h4" mt="5%" fontWeight={700} sx={{}}>
        MAQE Forum
      </Typography>
      <Typography variant="h6" mt="3%">
        Your current timezone is:{" "}
        {Intl.DateTimeFormat().resolvedOptions().timeZone}
      </Typography>
      <Grid container direction="column" gap="1em" mt="1em">
        {posts?.map((item, i) => {
          return (
            <Cards
              data={item}
              key={`card#${item?.id}`}
              evenBgColor={i % 2 != 0}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
