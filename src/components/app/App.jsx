
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Layout from '../Layout';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operation';
import { selectIsRefreshing } from '../../redux/auth/selectors';


const HomePage = lazy(() => import('../../pages/homePage/HomePage'));
const RegisterPage = lazy(() => import('../../pages/registerPage/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/loginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/contactsPage/ContactsPage'));



const App = () => {
const dispatch = useDispatch();
const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <ErrorMessage text = {"Refreshing user..."}/>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  )
}
export default App;