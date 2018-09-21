import React from 'react';
import { Link } from 'react-router-dom';
import OccasionList from './OccasionList';

const DashboardPage = () => (
    <div>
        <Link to="/create">Schedule an Event</Link>
        <OccasionList />
    </div>
);

export default DashboardPage;