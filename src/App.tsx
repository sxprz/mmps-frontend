import { Signal, signal } from '@preact/signals-react'
import './App.css'
import { Content } from './views/Content';
import { Stack } from '@mui/system';
import Bar from './components/Bar';
import { AppBar, Grid, Toolbar } from '@mui/material';
import Chatbar from './components/Chatbar';

export enum RawUploadStatus {
  IDLE,
  UPLOADING,
  SUCCESS,
  FAILURE
}

export enum ConversationSide {
  AI,
  USER
}

export type UploadStatus = {
  status: RawUploadStatus,
  additionalInfo: string
}

export type ConversationPart = {
  side: ConversationSide,
  message: string
}

export const sidebarSignal = signal(false);
export const uploadedFilesSignal = signal({ status: RawUploadStatus.IDLE, additionalInfo: "" });
export const currentSessionIdSignal = signal("");
export const conversationSignal = signal([]) as unknown as Signal<[ConversationPart]>;
export const darkModeSignal = signal(false);

function App() {
  return (
    <Stack spacing={5} width="100vw">
      <Bar />
      <Content />
      <AppBar position="sticky" sx={{ backgroundColor: "transparent" }}>
        <Toolbar>
        <Grid container justifyContent="center">
          <Chatbar />
        </Grid>
        </Toolbar>
      </AppBar>
    </Stack>
  )
}

export default App
