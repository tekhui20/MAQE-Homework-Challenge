import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { usersData } from "../../store/reducers/users";

export default function Cards(props) {
  const authors = useSelector(usersData);
  const { data, evenBgColor } = props;

  const FindAuthor = () => {
    return authors?.find((a) => a.id === data.author_id);
  };

  return (
    <Card sx={{ backgroundColor: evenBgColor ? "#ccecff" : "#FFF" }}>
      <CardContent
        sx={{
          padding: "0.5em 1em",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar src={FindAuthor()?.avatar_url} />
        <Typography ml="0.7em" color="#f46e45" fontWeight={600}>
          {FindAuthor().name}
        </Typography>
        <Typography ml="0.5em" color="gray">
          posted on{" "}
          {new Date(data?.created_at).toLocaleTimeString("en-th", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent
        sx={{
          padding: "1em 1em",
          display: "flex",
          "&:last-child": {
            paddingBottom: "1em",
          },
        }}
      >
        <Box component="img" src={data?.image_url} width="15em" height="10em" />
        <Grid container ml="1em" direction="column">
          <Grid item>
            <Typography variant="h5" fontWeight={600} sx={{}}>
              {data.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>{data.body}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
