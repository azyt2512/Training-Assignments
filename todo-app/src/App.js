import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoPreview from './components/TodoPreview';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

function App() {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className='app'>
            <nav className="navbar navbar-light sticky-top py-3 shadow mb-4" style={{ backgroundColor: '#ebff96' }}>
              <div className="container-fluid fs-4">
                <a className="navbar-brand" href="#">
                  <span className="material-symbols-outlined align-middle fs-3">
                    receipt_long
                  </span>
                  <span className="navbar-brand mb-0 h1 mx-1 align-middle fs-4">My Todo App</span>
                </a>
              </div>
            </nav>
            <div className="container-fluid m-2 row justify-content-between">
              <div className='row col-lg-5 col-md-5 col-sm-12'>
                <TodoForm />
                <TodoList />
              </div>
              <div className='shadow col-lg-7 col-md-7 col-sm-0 glassy'>
                <TodoPreview />
              </div>
            </div>
          </div>
        </PersistGate>
      </Provider>
      </React.StrictMode>
  );
}

export default App;
