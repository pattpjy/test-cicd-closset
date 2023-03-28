import "./PageNotFound.css"

export const PageNotFound = (): JSX.Element => {
  return (
    <section className="page-not-found">
      <h2>Oops! Page Not Found</h2>
      <button className="page-not-found-btn">Return Home</button>
      <img className="empty-closet-image" src="src/assets/empty-closet.png" alt="Picture of an empty closet"></img>
    </section>
  )
}