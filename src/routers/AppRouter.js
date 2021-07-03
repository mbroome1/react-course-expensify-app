import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from './../components/AddExpensePage';
import ExpenseDashBoardPage from './../components/ExpenseDashboardPage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpenseDashBoardPage} />
                <Route exact path="/create" component={AddExpensePage} />
                <Route exact path="/edit/:id" component={EditExpensePage} />
                <Route exact path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    
        </BrowserRouter>
    )

}

export default AppRouter