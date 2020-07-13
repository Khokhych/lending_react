import React from 'react';
import { useSelector } from 'react-redux';
import FooterItem from './FooterItem';
import './footer.sass';

export default () => {
  const data = useSelector((state) => state.data);
  return (
    <div className="footer">
      <div className="footer_container container">
        { data.footer
          ? (
            <div className="footer_top">
              <FooterItem data={data.footer.company} />
              <FooterItem data={data.footer.howItWorks} />
              <FooterItem data={data.footer.integrations} />

              <div className="footer_item footer_social">
                {data.footer.socials ? (
                  <ul className="footer_social-list">
                    {data.footer.socials.map((item, index) => (
                      <li className="footer_social-item" key={index}>
                        <a href={item.linl}>
                          <svg className="svg-icon">
                            <use xlinkHref={`#icon-${item.name}`} xmlnsXlink="http://www.w3.org/1999/xlink" />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : ''}
              </div>

              <FooterItem data={data.footer.solutions} />
              <FooterItem data={data.footer.otherProducts} />
            </div>
          )
          : ' '}
        { data.footer ? (
          <div className="footer_bottom">
            <div className="footer_bottom-logo">
              <svg className="svg-icon" width="146" height="39">
                <use xlinkHref="#icon-logo" xmlnsXlink="http://www.w3.org/1999/xlink" />
              </svg>
            </div>
            <p className="footer_copyright">{data.footer.copyright}</p>
            <div className="footer_bottom-links">
              {
                data.footer.footerTools.map((item, i) => (
                  <a href={item.link}>
                    {item.name}
                  </a>
                ))
              }
            </div>
          </div>

        ) : ''}
      </div>
    </div>
  );
};
