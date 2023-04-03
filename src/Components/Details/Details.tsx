import "./Details.css";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { getSingleItem } from "../../apiCall";
import { singleItemCleaning } from "../../util";

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
   getSingleItem(params.id!)
   .then((response) => {
        setItem(singleItemCleaning(response.data))
        setFetchError(false)
        setLoading(false)
      })
      .catch((Error)  => {
        setFetchError(true)
      })
  }, []);

   useEffect(() => {
    if (fetchError) {
      navigate('/item-not-found')
    }
  }, [fetchError]);

  return (
    <section className="details-section">
      <h2 className="item-details-header">Item Details</h2>
      {loading && <p>Loading...</p>}
      {item && <div className="item-details-container">
        <NavLink to={`/edit/${params.id}`}>
          <p className="item-details">{item!.attributes.color}</p>
        </NavLink>
        <NavLink to={`/edit/${params.id}`}>
          <p className="item-details">{item!.attributes.season}</p>
        </NavLink>
        <NavLink to={`/edit/${params.id}`}>
          <p className="item-details">{item!.attributes.clothing_type}</p>
        </NavLink>
        {item!.attributes.size && <NavLink to={`/edit/${params.id}`}>
          <p className="item-details">{`size ${item!.attributes.size}`}</p>
        </NavLink>}
      </div>}
      {item && <img className="details-image" src={item.attributes.image_url} alt='Image of clothing item'/> }
      {item && item!.attributes.notes && <div className="notes-container"> 
        <h2 className="item-notes-header">Notes</h2>
        <p className="item-notes">{item!.attributes.notes}</p> 
        </div>}
      {!loading && <section className="details-button-container">
        <NavLink to={`/edit/${params.id}`}>
          <button className="details-edit-button">Edit</button>
        </NavLink>
        <button className="details-list-button">Add to List</button>
        <button className="details-delete-button">Delete</button>
      </section>}
    </section>
  )
}