import React from 'react';
import propTypes from 'prop-types';
import s from './statistics.module.css';

const Statistics = ({title = 'Upload stats', stats }) => (
    <section className={s.statistics}>
        <h2 className={s.title}>{ title }</h2>

 <ul className={s.list}>
      {stats.map(el => (
        <li className={s.item} key={el.id}>
          <span className={s.label}>{el.label}</span>
          <span className={s.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
</section>
);

Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired,
        }),
    ),
};

export default Statistics;