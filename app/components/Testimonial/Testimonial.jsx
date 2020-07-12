import React from 'react';
import { useSelector } from 'react-redux';
import './testimonial.sass';

export default () => {
  const data = useSelector((state) => state.data.testimonial);
  return (
    <div className="testimonial">
      <div className="container testimonial_container">
        {data
          && (
          <blockquote>
            <q>
              {data.text}
            </q>
            <cite>
              <span className="testimonial_author">
                <span className="testimonial_author-name">{data.author.name}</span>
                <span>{data.author.position}</span>
                <span>{data.author.company}</span>
              </span>
              <img className="testimonial_author-img" src={data.author.authorLogo} alt="" />
            </cite>
          </blockquote>
          )}
      </div>
    </div>
  );
};
