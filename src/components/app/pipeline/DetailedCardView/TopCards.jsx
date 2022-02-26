import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
const TopCards = ({ data }) => {
  const [priceColor, setPriceColor] = React.useState('black');
  useEffect(() => {
    if (data?.PriceChange < 0) setPriceColor('red');
    else if (data?.PriceChange > 0) setPriceColor('green');
    else setPriceColor('black');
  }),
    [data];
  return (
    <div className="d-flex mt-3 ms-3">
      <Card className="DetailedCardView__topCard me-3">
        <h5 style={{ fontSize: '15px' }} className="px-3 pb-2 pt-3">
          {data?.symbol} Price
        </h5>
        <h3 className="text-center" style={{ color: priceColor }}>
          ${data?.Price.toFixed(5)}
        </h3>
        <h5
          style={{ fontSize: '15px', color: priceColor }}
          className="mt-4 mx-3"
        >
          24H: {data?.PriceChange > 0 ? '+' : ''} {data?.PriceChange}%
        </h5>
        <h5 className="mx-3">ATH: $1.00</h5>
      </Card>
      <Card className="DetailedCardView__topCard p-3 me-3">
        <h5 style={{ fontSize: '15px' }}>
          Circulating <br /> Market Cap
        </h5>
        <h3 className="my-3">
          ${new Intl.NumberFormat('en-US').format(data?.MarketCap)}
        </h3>
        <h5 style={{ fontSize: '15px' }}>
          Fully diluted: <br />
          $5,111,258
        </h5>
      </Card>
      <Card className="DetailedCardView__topCard p-3 me-3">
        <h5 style={{ fontSize: '15px' }}>Total holders</h5>
        <h3 className="mt-5 px-4">7,087</h3>
      </Card>
      <Card className="DetailedCardView__topCard me-3"></Card>
    </div>
  );
};

export default TopCards;
