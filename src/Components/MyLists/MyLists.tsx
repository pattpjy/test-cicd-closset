import { useEffect, useState } from 'react';
import React from 'react'

interface ListItem {
  id: number;
  name: string;
}

export const MyLists: React.FC<{ userId: number }> = ({ userId }) => {
  const [lists, setLists] = useState<ListItem[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      const response = await fetch(`https://closet-manager-be.herokuapp.com/api/v1/users/${userId}/lists`);
      const data = await response.json();
      console.log(data)
      setLists(data);
    };
    fetchLists();
  }, [userId]);

  return (
    <div>
      <h2>Custom Lists</h2>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>{list.name}</li>
        ))}
      </ul>
    </div>
  );
};