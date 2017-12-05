import { MainComponent } from './main.component';
import { BudgetComponent } from './budget/budget.component';

const mainSubRoutes = [
    {
        path: 'budget',
        component: BudgetComponent
    },
    {
        path: '',
        component: BudgetComponent
    }
]

export const mainRoutes = [
    {
        path: 'main',
        component: MainComponent,
        children: mainSubRoutes
    }
]