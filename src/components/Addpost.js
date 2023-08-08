import styled from "@emotion/styled";
import {
  Add as AddIcon,
  DateRange,
  Image,
  Mood,
  PersonAddAlt1,
  Share,
  VideoCall,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// Creating a styled Modal component using emotion
const MyModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Creating a styled Box (Container) for user information
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

const Addpost = () => {
  // Using state to control the visibility of the modal
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Tooltip with a Fab button to open the modal */}
      <Tooltip
        onClick={(event) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "cals(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      {/* Custom styled Modal */}
      <MyModal
        open={open}
        onClose={(event) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Container for the modal content */}
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Add post
          </Typography>
          {/* User information display */}
          <UserBox>
            <Avatar src="/myimage.jpg" sx={{ width: 35, height: 35 }} />
            <Typography fontWeight={500} variant="span">
              Rajj Danush
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Enter your quote here..."
            variant="standard"
          />
          {/* Stack of icons */}
          <Stack direction="row" gap={2} mt={2} mb={3}>
            <Mood color="warning" />
            <VideoCall color="primary" />
            <PersonAddAlt1 color="error" />
            <Image color="secondary" />
            <Share color="success" />
          </Stack>
          {/* Button group for posting and adding a date */}
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </MyModal>
    </>
  );
};

export default Addpost;
