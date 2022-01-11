import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';

import { MainPage } from '@pages';

import { RecursiveWrapperRenderer } from '@utils';
import { StrictMode } from 'react';

export default function App() {
  return (
    <RecursiveWrapperRenderer
      Wrappers={[StrictMode, BrowserRouter, Switch]}
    >
      <Route
        path="/"
        component={MainPage}
      />
      <Route>
        <Redirect to="/" />
      </Route>
    </RecursiveWrapperRenderer>
  );
}
