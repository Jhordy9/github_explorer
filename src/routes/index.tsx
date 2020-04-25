import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

/**
 * -> Para cada uma das páginas da aplicação terá uma rota
 * -> exact é colocando na primeira rota, para que possa ser comparado com as demais
 * -> Switch é uma verificação para que apenas uma rota seja exibida
 */
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
