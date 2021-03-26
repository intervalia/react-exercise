import React, { useState } from 'react';

function RepresentativeInfo({ rep = {} }) {
  console.log('RepresentativeInfo');
  console.log(rep);
  const office = (rep.office || 'Office').split('; ');
  return (
    <div>
      <h2>Representative Details</h2>
      <div className="rep-info">
        <div className="rep-info__item">{rep.name || 'Name'}</div>
        <div className="rep-info__item">{rep.party || 'Party'}</div>
        <div className="rep-info__item">{rep.district || 'District'}</div>
        <div className="rep-info__item">{rep.phone || 'Phone'}</div>
        <div className="rep-info__item">{office[0]}<br/>{office[1] || ''}</div>
        <div className="rep-info__item">{rep.website || 'Website'}</div>
      </div>
    </div>
  );
};

export default RepresentativeInfo;
