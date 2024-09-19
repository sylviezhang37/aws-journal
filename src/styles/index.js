const styles = {
  appLogo: {
    width: "100px",
    height: "100px",
    position: "relative",
    // left: "-10%"
  },
  textArea: {
    width: "100%",
    resize: "vertical",
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "5px",
  },
  fullWidthButton: {
    width: "100%",
  },
  signOutButton: {
    flex: 1,
  },
  newEntryContainer: {
    // display: "flex",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "60%",
    margin: "0 auto",
    height: "100vh", // Ensure the container takes full height
  },
  formContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: "2rem",
    padding: "1rem",
  },
  currentEntriesContainer: {
    justifyContent: "center",
    alignItems: "center",
    // set the flex direction to column instead of direction
    flexDirection: "column",
    width: "70%",
    margin: "0 auto",
  },
  entryGrid: {
    margin: "3rem 0",
    autoFlow: "column",
    justifyContent: "center",
    gap: "2rem",
    alignContent: "center",
  },
  entryBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    border: "1px solid #ccc",
    padding: "2rem",
    borderRadius: "5%",
  },
  imageAttachment: {
    width: 200,
  },
};

export default styles;
