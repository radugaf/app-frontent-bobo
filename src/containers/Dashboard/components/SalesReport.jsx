import React from 'react';
import { useTranslation } from 'react-i18next';
import { Progress } from 'reactstrap';
import Panel from '../../../shared/components/Panel';

const data = [
  {
    id: 0, title: 'Today', now: '$ 298,92', plan: '$ 250 planned', label: '100%', value: 100, pink: false,
  }, 
];

const SalesReport = () => {
  const { t } = useTranslation('common');

  return (
    <Panel md={12} lg={6} title="Raport Vanzari">
      <div className="dashboard__sales-report">
        {data.map(item => (
          <div
            key={item.id}
            className={!item.pink
              ? 'progress-wrap progress-wrap--small'
              : 'progress-wrap progress-wrap--small progress-wrap--pink'}
          >
            <p className="dashboard__sales-report-title">{item.title}</p>
            <p className="dashboard__sales-report-now">{item.now}</p>
            <p className="dashboard__sales-report-plan">{item.plan}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default SalesReport;
