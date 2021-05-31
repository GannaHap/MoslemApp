import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

import './SurahQuranSK.css';

export default class SurahQuranSK extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="sk-title-surah">
          <h1>
            <Skeleton width="50%" />
          </h1>
          <Skeleton count={1} width="70%" />
        </div>

        <div className="sk-card-surah">
          <div className="sk-section-top">
            <Skeleton circle={true} height={30} width={30} />
            <Skeleton height={16} width={230} />
          </div>
          <div className="sk-section-mid">
            <Skeleton height={20} width="80%" />
          </div>
          <div className="sk-section-bottom">
            <Skeleton height={12} count={2} width="100%" />
          </div>
        </div>

        <div className="sk-card-surah">
          <div className="sk-section-top">
            <Skeleton circle={true} height={30} width={30} />
            <Skeleton height={16} width={230} />
          </div>
          <div className="sk-section-mid">
            <Skeleton height={20} width="80%" />
          </div>
          <div className="sk-section-bottom">
            <Skeleton height={12} count={2} width="100%" />
          </div>
        </div>

        <div className="sk-card-surah">
          <div className="sk-section-top">
            <Skeleton circle={true} height={30} width={30} />
            <Skeleton height={16} width={230} />
          </div>
          <div className="sk-section-mid">
            <Skeleton height={20} width="80%" />
          </div>
          <div className="sk-section-bottom">
            <Skeleton height={12} count={2} width="100%" />
          </div>
        </div>
      </div>
    );
  }
}
