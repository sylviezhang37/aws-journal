import API from "../api/utils";

export async function fetchEntries(userId) {
  const response = await API.get(`users/${userId}`);
  return response;
}

export async function createEntry(userId, form) {
  const formDataObj = {
    title: form.get("title"),
    body: form.get("body"),
    userId: userId,
  };

  console.log("creating entry");

  const response = await API.post(`users/${userId}`, formDataObj);
  return response.data;
}

export async function deleteEntry(userId, entryId) {
  console.log("trying to delete", userId, entryId);
  const response = await API.del(`users/${userId}/entries/${entryId}`);
  return response;
}
