import { useState, useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  fetchEntries,
  createEntry,
  deleteEntry,
} from "./services/notesService";
import CurrentNotes from "./components/CurrentNotes";
import NoteForm from "./components/NoteForm";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  const [userprofiles, setUserProfiles] = useState([]);
  const [userId, setUserId] = useState(null); // Keep userId in state
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [entries, setEntries] = useState([]);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (userprofiles.length > 0) {
      setUserId(userprofiles[0].id);
    }
  }, [userprofiles]);

  async function fetchUserProfile() {
    const { data: profiles } = await client.models.UserProfile.list();
    setUserProfiles(profiles);
  }

  useEffect(() => {
    fetchAndSetEntries();
  }, []);

  async function fetchAndSetEntries() {
    const entriesData = await fetchEntries(userId);
    setEntries(entriesData);
  }

  async function handleCreateEntry(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log("creating for", userId);
    await createEntry(userId, form);
    fetchAndSetEntries();
    event.target.reset();
    deleteFile();
  }

  async function handleDeleteEntry(id) {
    await deleteEntry(userId, id);
    fetchAndSetEntries();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  }

  function deleteFile() {
    setFileName("");
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NoteForm
                handleCreateEntry={handleCreateEntry}
                handleFileChange={handleFileChange}
                fileName={fileName}
                signOut={signOut}
              />
            </>
          }
        />
        <Route
          path="/current-notes"
          element={
            <CurrentNotes
              notes={entries}
              handleDeleteEntry={handleDeleteEntry}
            />
          }
        />
      </Routes>
    </Router>
  );
}
