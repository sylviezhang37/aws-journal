import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@aws-amplify/ui-react";
import appLogo from "../assets/notepad.png";
import styles from "../styles";

export default function NoteForm({
  handleCreateEntry,
  handleFileChange,
  fileName,
  signOut,
}) {
  return (
    <div className="App" style={styles.newEntryContainer}>
      <img src={appLogo} alt="AppLogo" style={styles.appLogo} />
      <form style={{ margin: "2rem" }} onSubmit={handleCreateEntry}>
        <div style={{ ...styles.formContainer, gap: "1rem" }}>
          <textarea
            name="title"
            placeholder="Title"
            required
            rows={1}
            style={styles.textArea}
          />
          <textarea
            name="body"
            placeholder="..."
            rows={5}
            style={styles.textArea}
          />

          {/* <input
            name="image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            style={{ alignSelf: "end", marginBottom: "1rem" }}
          /> */}

          {/* {fileName && <p style={{ marginBottom: "1rem" }}>Selected file: {fileName}</p>} */}

          <div style={styles.buttonsContainer}>
            <Button
              type="submit"
              variation="primary"
              size="small"
              style={styles.fullWidthButton}
            >
              Add Entry
            </Button>

            <Link to="/current-notes" style={{ width: "100%" }}>
              <Button
                type="button"
                variation="primary"
                size="small"
                style={styles.fullWidthButton}
              >
                Existing Entries
              </Button>
            </Link>

            <Button
              type="button"
              size="small"
              onClick={signOut}
              style={styles.fullWidthButton}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
