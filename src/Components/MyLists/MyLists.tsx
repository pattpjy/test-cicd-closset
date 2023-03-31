import { useEffect, useState } from 'react';

interface ListItem {
  id: number;
  name: string;
}

export const MyLists: React.FC<{ userId: number }> = ({ userId }) => {
  const [lists, setLists] = useState<ListItem[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch(`https://closet-manager-be.herokuapp.com/api/v1/users/${userId}/lists`);
        const data = await response.json();
        setLists(data.data.map((list:any) => ({ id: parseInt(list.id), name: list.attributes.name })));
      } catch (error) {
        console.error(error);
      }
    };
    fetchLists();
  }, [userId]);

  const handleListClick = (listId: number) => {
    console.log(`List with ID ${listId} clicked`);
  };

  return (
    <div>
      <h2>Custom Lists</h2>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <button onClick={() => handleListClick(list.id)}>{list.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};