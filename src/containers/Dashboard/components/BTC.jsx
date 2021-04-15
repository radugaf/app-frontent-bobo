import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col } from 'reactstrap';
import {
  AreaChart, Tooltip, Area, ResponsiveContainer, XAxis,
} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const data = [{ name: 'Mon', btc: 70.23 },
  { name: 'Tue', btc: 80.5 },
  { name: 'Wed', btc: 38.45 },
  { name: 'Thu', btc: 89.2 },
  { name: 'Fri', btc: 105.61 },
  { name: 'Sat', btc: 98.6 },
  { name: 'Sun', btc: 115 }];

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="dashboard__total-tooltip">
        <p className="label">{`$${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
  })),
};

CustomTooltip.defaultProps = {
  active: false,
  payload: null,
};

const BTC = ({ dir }) => {
  const [activeIndex] = useState(0);

  return (
    <Col lg={6}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="card__title">
            <h3 className="bold-text">Sumar Vanzari</h3>
            <h5 className="subhead">Partajare pe luni</h5>
          </div>
          <div className="dashboard__total dashboard__total--area">
            <TrendingUpIcon className="dashboard__trend-icon" />
            <p className="dashboard__total-stat">
              {/* $ {(data[activeIndex].btc).toFixed(2)} */}
              1500 RON
            </p>
            <div className="dashboard__chart-container">
              <ResponsiveContainer height={70}>
                <AreaChart
                  data={data}
                  margin={{
                    top: 0, left: 0, bottom: 0,
                  }}
                >
                  <XAxis
                    hide
                    reversed={dir === 'rtl'}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    name="BTC"
                    type="monotone"
                    dataKey="btc"
                    fill="#4ce1b6"
                    stroke="#4ce1b6"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

BTC.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default BTC;
