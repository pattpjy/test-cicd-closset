import { useEffect, useState } from 'react';
import React from 'react'

interface ListItem {
  id: number;
  name: string;
}

export const MyLists: React.FC<{ userId: number }> = ({ userId }) => {
  const [lists, setLists] = useState<ListItem[]>([]);

  return (

  );
};