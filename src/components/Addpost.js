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

const MyModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

const Addpost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
      <MyModal
        open={open}
        onClose={(event) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Add post
          </Typography>
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
          <Stack direction="row" gap={2} mt={2} mb={3}>
            <Mood color="warning" />
            <VideoCall color="primary" />
            <PersonAddAlt1 color="error" />
            <Image color="secondary" />
            <Share color="success" />
          </Stack>
          <ButtonGroup
          fullWidth
            variant="contained"
            aria-label="Outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </MyModal>
    </>
  );
};

export default Addpost;
