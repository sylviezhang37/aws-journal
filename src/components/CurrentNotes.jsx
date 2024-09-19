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

export default function CurrentNotes({
  notes,
  handleDeleteEntry
}) {
  return (
    <Flex className="CurrentNotes" style={styles.currentEntriesContainer}>
      <Heading level={3}>All Entries</Heading>
      <Grid style={styles.entryGrid}>
        {notes.map((note) => (
          <Flex
            key={note.id || note.title}
            style={styles.entryBox}
            className="box"
          >
            <Heading level={4}>{note.title}</Heading>
            <Text>{note.body}</Text>
            {/* {note.image && (
              <Image
                src={note.image}
                alt={`visual aid for ${note.title}`}
                style={styles.imageAttachment}
              />
            )} */}
            <Button onClick={() => handleDeleteEntry(note.id)}>Delete</Button>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
}
