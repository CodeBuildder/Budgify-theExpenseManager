import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashBoardPage'
import HelpExpensePage from '../components/HelpExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} exact={true}/>
            <Route path="/edit/:id" component={EditExpensePage} exact={true}/>
            <Route path="/help" component={HelpExpensePage} exact={true}/>
            <Route component={NotFoundPage} exact={true}/>
        </Switch>
    </div>    
    </BrowserRouter>
)

export default AppRouter