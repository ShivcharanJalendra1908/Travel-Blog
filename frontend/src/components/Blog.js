import React from "react";
import axios from "axios";
import {Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./Utils";

const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`https://travel-bog.onrender.com/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };
  
  return (
    <div>
      {" "}
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
             <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}>
              <EditIcon color="warning"/></IconButton>
             <IconButton onClick={handleDelete}>
              <DeleteIcon color="error"/></IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar
              className={classes.font}
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            >
              {userName ? userName.charAt(0) : ""}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt=" "
        />

        <CardContent>
          <hr />
          <br />
          <Typography
            className={classes.font}
            variant="body2"
            color="text.secondary"
          >
            <b>{userName}</b> {": "} {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;