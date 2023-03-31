import { useEffect, useState} from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { getSingleItem } from "../../apiCall"


interface attributes {
  season: string;
  clothing_type: string;
  size: string;
  color: string;
  image_url: string;
  notes: string;
}

interface Item {
  id: number;
  type: string;
  attributes: attributes;
}

export const Details = (): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<Item | undefined>();
  const [fetchError, setFetchError] = useState<boolean>(false); 
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
   console.log("params", params.id)
   getSingleItem(params.id!)
   .then((response) => {
    console.log(response)
        setItem(response.data)
        setFetchError(false)
        setLoading(false)
      })
      .catch((Error)  => {
        console.log("Item Fetch Error")
        setItem(undefined)
        setFetchError(true)
        setLoading(false)
      })
  }, []);
  return (
    <h2>Details</h2>
  )
}