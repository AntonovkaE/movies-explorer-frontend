import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="notFoundPage">
      <h1 className="notFoundPage__title">
        404
      </h1>
      <p className="notFoundPage__subtitle">Страница не найдена</p>
      <Link className={`link link_back`} to={-1}>Назад</Link>
    </section>
  )
}

export default NotFoundPage;
