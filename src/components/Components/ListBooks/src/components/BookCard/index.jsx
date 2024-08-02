import React from "react";
import styles from "./BookCard.module.css";

const BookCard = ({ book }) => {
  return (
    <div className={styles.cardWrapper}>
      <img className={styles.cardImg} src={book.image} alt={book.title} />

      <div className={styles.contentWrapper}>
        <h2 className={styles.cardTitle}>{book.title}</h2>
        <h3>
          <span className={styles.bookAuthor}>Автор:</span> {book.author}
        </h3>
        <p className={styles.bookRatingWrapper}>
          <span className={styles.bookRating}>Оценка:</span> {book.rating}/10
        </p>
        <p className={styles.bookCommentWrapper}>
          <span className={styles.bookComment}>Личный комментарий:</span>{" "}
          {book.comment ? book.comment : "Нет комментария"}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
