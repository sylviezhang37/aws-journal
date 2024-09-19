import React, { useState } from "react";
import {
  Button,
  TextField,
  Flex,
  View,
  Image,
} from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import appLogo from "../assets/notepad.png";
import styles from "../styles";

export default function NoteForm({
  handleCreateEntry,
  handleFileChange,
  fileName,
  signOut,
}) {
  return (
    <View className="App" style={styles.newEntryContainer}>
      <Image src={appLogo} alt="AppLogo" style={styles.appLogo} />
      <View as="form" margin="2rem" onSubmit={handleCreateEntry}>
        <Flex style={styles.formContainer}>
          <View
            as="textarea"
            name="title"
            placeholder="Title"
            required
            rows={1}
            style={styles.textArea}
          />
          <View
            as="textarea"
            name="body"
            placeholder="..."
            rows={5}
            style={styles.textArea}
          />

          {/* <View
            name="image"
            as="input"
            type="file"
            alignSelf={"end"}
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
          /> */}

          {/* {fileName && <Text>Selected file: {fileName}</Text>} */}

          <Button type="submit" variation="primary" style={styles.fullWidthButton}>
            Add Entry
          </Button>

          <Link to="/current-notes">
            <Button variation="primary" style={styles.fullWidthButton}>
              Existing Entries
            </Button>
          </Link>

          <Button onClick={signOut} style={styles.signOutButton}>
            Sign Out
          </Button>
        </Flex>
      </View>
    </View>
  );
}
