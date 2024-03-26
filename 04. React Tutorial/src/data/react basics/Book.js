const Book = ({ job, title, author, img, children }) => {
  return (
    <article>
      <img src={img} alt="book" />
      <p>{job}</p>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

export default Book;
