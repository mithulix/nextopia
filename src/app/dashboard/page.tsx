import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Card from '@/components/ui/Card';
import styles from './page.module.scss';

const Dashboard = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%' },
    { title: 'Revenue', value: '$34,567', change: '+8%' },
    { title: 'Conversion', value: '3.2%', change: '+0.5%' },
  ];

  return (
    <div className={styles.dashboard}>
      <Navbar />
      <main className={styles.content}>
        <h1>Welcome back, User!</h1>
        
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <Card key={index} className={styles.statCard}>
              <h3>{stat.title}</h3>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.change}>{stat.change}</p>
            </Card>
          ))}
        </div>

        <div className={styles.chartSection}>
          <Card className={styles.chartCard}>
            <h2>Activity Overview</h2>
            {/* Chart would go here */}
            <div className={styles.chartPlaceholder}></div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;