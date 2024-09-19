import React from "react";
import styles from "../styles";
import { Button } from "@aws-amplify/ui-react";

const sampleEntry = [
  {
    id: 1,
    title: "Sample Entry",
    body: "This is a sample entry body.",
  },
];

export default function CurrentNotes({
  entries = sampleEntry,
  handleDeleteEntry,
}) {
  return (
    <div className="CurrentNotes" style={styles.currentEntriesContainer}>
      <h3>All Entries</h3>
      <div style={styles.entryGrid}>
        {Array.isArray(entries) && entries.length > 0 ? (
          entries.map((entry) => (
            <div
              key={entry.id || entry.title}
              style={styles.entryBox}
              className="box"
            >
              <h4>{entry.title}</h4>
              <p>{entry.body}</p>
              {/* {entry.image && (
                <img
                  src={entry.image}
                  alt={`visual aid for ${entry.title}`}
                  style={styles.imageAttachment}
                />
              )} */}
              <div style={styles.deleteButton}>
                <Button
                  size="small"
                  onClick={() => handleDeleteEntry(entry.id)}
                  style={styles.entryText}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No entries yet. Go back to add more!</p>
        )}
      </div>
    </div>
  );
}
