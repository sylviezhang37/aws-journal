const styles = {
  appLogo: {
    width: "100px",
    height: "100px",
    position: "relative",
  },
  textArea: {
    width: "100%",
    resize: "vertical",
    padding: "1rem",
    fontSize: "1rem",
    marginBottom: "0.5rem",
    borderRadius: "5px",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "20%",
    marginRight: "20%",
    gap: "0.5rem",
  },
  fullWidthButton: {
    width: "100%",
  },
  deleteButton: {
    position: "relative",
    height: "30px",
    right: "-5%",
  },
  newEntryContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "60%",
    margin: "0 auto",
    height: "100vh"
  },
  formContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: "2rem",
    padding: "1rem",
  },
  currentEntriesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "black",
    width: "70%",
    margin: "0 auto",
    color: "black",
  },
  entryGrid: {
    display: "flex",
    autoFlow: "column",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  entryBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    border: "1px solid #ccc",
    width: "70%",
    padding: "2rem",
    margin: "0.5rem",
    borderRadius: "5%",
  },
  entryText: {
    position: "absolute",
    bottom: "10%",
    right: "10%",
  },
  imageAttachment: {
    width: 200,
  },
};

export default styles;
