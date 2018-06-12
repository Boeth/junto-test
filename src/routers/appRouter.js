import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/addExpensePage';
import EditExpensePage from '../components/editExpensePage';
import ExpenseDashboardPage from '../components/expenseDashboardPage';
import Header from '../components/header';
import NotFoundPage from '../components/notFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/add" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />         
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
