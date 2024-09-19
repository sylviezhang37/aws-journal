import React from "react";
import {
  Heading,
  Grid,
  Flex,
  Text,
  Image,
  Button,
} from "@aws-amplify/ui-react";
import styles from "../styles";

export default function CurrentNotes({ entries = [], handleDeleteEntry }) {
  return (
    <Flex className="CurrentNotes" style={styles.currentEntriesContainer}>
      <Heading level={3}>All Entries</Heading>
      <Grid style={styles.entryGrid}>
        {Array.isArray(entries) && entries.length > 0 ? ( // Check if entries is an array
          entries.map((entry) => (
            <Flex
              key={entry.id || entry.title}
              style={styles.entryBox}
              className="box"
            >
              <Heading level={4}>{entry.title}</Heading>
              <Text>{entry.body}</Text>
              {/* {note.image && (
                <Image
                  src={note.image}
                  alt={`visual aid for ${note.title}`}
                  style={styles.imageAttachment}
                />
              )} */}
              <Button onClick={() => handleDeleteEntry(entry.id)}>
                Delete
              </Button>
            </Flex>
          ))
        ) : (
          <Text>No entries yet. Go back to add more!</Text>
        )}
      </Grid>
    </Flex>
  );
}
