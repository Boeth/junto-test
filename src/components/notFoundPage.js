import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

const NotFoundPage = () => (
  <div>
    <Typography variant="title" color="inherit">
      404 - <Link to="/">Домой</Link>
    </Typography>
  </div>
);

export default NotFoundPage;
