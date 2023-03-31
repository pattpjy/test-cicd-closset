export const getAllItems = async () => {
  const url = "https://closet-manager-be.herokuapp.com/api/v1/users/1/items";
  // hard-coding this fetch for user 1 for now, make dynamic if we add other users
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Data. Try Later.");
  }
  return response.json();
};

export const filterItems = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Data. Try Later.")
  }
  return response.json()
};

export const createItem = async (data: any) => {
  // we cannot leave data: any!! We should make an interface 
  const url = `https://closet-manager-be.herokuapp.com/api/v1/users/1/items`;
    // hard-coding this fetch for user 1 for now, make dynamic if we add other users
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