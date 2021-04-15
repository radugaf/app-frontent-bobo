import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Progress } from 'reactstrap';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import Panel, { PanelTitle } from '../../../shared/components/Panel';

const data01 = [{ value: 78, fill: '#b8e986' },
  { value: 23, fill: '#eeeeee' }];

const data02 = [{ value: 25, fill: '#ff4861' },
  { value: 75, fill: '#eeeeee' }];

const data03 = [{ value: 56, fill: '#ffc107' },
  { value: 44, fill: '#eeeeee' }];

const social = [
  { id: 0, social: 'Booking.com', progress: '87' },
  { id: 1, social: 'Airbnb', progress: '65' },
  { id: 2, social: 'Tripadvisor', progress: '92' },
  { id: 3, social: 'Tripadvisor', progress: '81' },
];

const SocialScore = ({ children, progress }) => (
  <div className="dashboard__social-stat-item">
    <div className="dashboard__social-stat-title">
      {children}
    </div>
    <div className="dashboard__social-stat-progress">
      <div className="progress-wrap progress-wrap--small progress-wrap--blue-gradient progress-wrap--rounded">
        <p className="progress__label">{progress}%</p>
        <Progress value={progress} />
      </div>
    </div>
  </div>
);

SocialScore.propTypes = {
  progress: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const WeeklyStat = () => {

  return (
    <Panel
      md={12}
      lg={12}
      title='Review-urile tale'
    >
      <div className="dashboard__weekly-stat">

      <div className="row">
        <div className="col-lg-4">
          <div className="dashboard__weekly-stat-chart">

            <div className="dashboard__weekly-stat-chart-item">
              <div className="dashboard__weekly-stat-chart-pie">
                <ResponsiveContainer>
                  <PieChart className="dashboard__weekly-stat-chart-pie-wrapper">
                    <Pie
                      data={data01}
                      dataKey="value"
                      cx={50}
                      cy={50}
                      innerRadius={50}
                      outerRadius={55}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <p className="dashboard__weekly-stat-label" style={{ color: '#b8e986' }}>78%</p>
              </div>
              <div className="dashboard__weekly-stat-info">
                <p>Calitatea Livrarii</p>
              </div>
            </div>
            
            <div className="dashboard__weekly-stat-chart-item">
              <div className="dashboard__weekly-stat-chart-pie">
                <ResponsiveContainer>
                  <PieChart className="dashboard__weekly-stat-chart-pie-wrapper">
                    <Pie
                      data={data02}
                      dataKey="value"
                      cx={50}
                      cy={50}
                      innerRadius={50}
                      outerRadius={55}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <p className="dashboard__weekly-stat-label" style={{ color: '#ff4861' }}>25%</p>
              </div>
              <div className="dashboard__weekly-stat-info">
                <p>Promptitudine</p>
              </div>
            </div>

            <div className="dashboard__weekly-stat-chart-item">
              <div className="dashboard__weekly-stat-chart-pie">
                <ResponsiveContainer>
                  <PieChart className="dashboard__weekly-stat-chart-pie-wrapper">
                    <Pie
                      data={data03}
                      dataKey="value"
                      cx={50}
                      cy={50}
                      innerRadius={50}
                      outerRadius={55}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <p className="dashboard__weekly-stat-label" style={{ color: '#ffc107' }}>49%</p>
              </div>
              <div className="dashboard__weekly-stat-info">
                <p>Bla bla bla</p>
              </div>
            </div>
          
          </div>
        </div>
        
        <div className="col-lg-8">
        <PanelTitle title='Cele mai bine vandute produse' />
        <div className="dashboard__social-stat">
          {social.map(item => (
            <SocialScore key={item.id} progress={item.progress}>
              {item.social}
            </SocialScore>
          ))}
        </div>
        </div>
        </div>
      </div>
    </Panel>
  );
};

export default WeeklyStat;
