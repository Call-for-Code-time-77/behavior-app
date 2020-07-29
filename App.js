import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persist } from './src/store';
import AuthRoutes from './src/routes/auth.routes'

export default function App() {
  return (
    <>
        <StatusBar style="auto" />
        <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
                <AuthRoutes />
            </PersistGate>
        </Provider>
    </>
  );
}