import React from 'react';

export default (props) => {
  const { data } = props;
  return (
    <div className={`footer_item${data.sub ? ' footer_sub' : ''}`}>
      { data ? (
        <div className="footer_item-cont">
          <div className="footer_item-title">
            {data.title}
          </div>
          {data.links
            ? (
              <ul className="footer_item-list">
                {data.links.map((item, index) => (
                  <li key={index} className="footer_item-list-item">
                    <a className="footer_item-list-item-link" href={item.link}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )
            : (
              <div className="footer_item-sub">
                {data.sub.map((item) => (
                  <div className="footer_item-sub-item">
                    {item.title ? <div className="footer_item-sub-item-title">{item.title}</div> : ''}
                    <ul className="footer_item-list">
                      {item.links.map((item, index) => (
                        <li key={index} className="footer_item-list-item">
                          <a className={item.big ? 'footer_link-big' : ''} href={item.link}>
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
        </div>
      ) : ''}
    </div>
  );
};
