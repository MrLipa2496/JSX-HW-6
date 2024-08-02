import React, { useState } from "react";
import styles from "./BookForm.module.css";

function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addBook({ title, author, rating, image, comment });
    setAuthor("");
    setTitle("");
    setRating(0);
    setImage("");
    setComment("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>
        Название книги:
        <input
          className={styles.formInput}
          type="text"
          placeholder="Алиса в стране чудес"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Автор:
        <input
          className={styles.formInput}
          type="text"
          placeholder="Александ Александров"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Рейтинг (0-10):
        <input
          className={styles.formInput}
          type="number"
          min="0"
          max="10"
          value={rating}
          onChange={e => setRating(e.target.value)}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Ссылка на изображение:
        <input
          className={styles.formInput}
          type="text"
          placeholder="Ссылка на изображение"
          value={image}
          onChange={e => setImage(e.target.value)}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Комментарий:
        <textarea
          className={styles.formTextarea}
          placeholder="Комментарий"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </label>

      <button className={styles.submitBtn} type="submit">
        Добавить книгу
      </button>
    </form>
  );
}

export default BookForm;
