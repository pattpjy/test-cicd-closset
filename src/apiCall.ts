export const getAllItems = async () => {
  const url = "http://localhost:5000/api/v1/users/1/items";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Data. Try Later.");
  }
  return response.json();
};

export const createItem = async (userId: string, data: any) => {
  //data make an interface for the post data

  const url = `http://localhost:5000/api/v1/users/${userId}/items`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Unable To Fetch Your Data. Try Later.");
  }
  return response.json();
};
