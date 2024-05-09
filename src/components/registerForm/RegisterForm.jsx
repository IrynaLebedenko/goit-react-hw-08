import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.elements.name.value || !form.elements.email.value || !form.elements.password.value) {
      setError('Please fill in all fields');
      return;
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
    setError('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <label className={css.label}>
        Username
        <input className = {css.input} type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input className = {css.input} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className = {css.input} type="password" name="password" />
      </label>
      <button className = {css.btn} type="submit">Register</button>
    </form>
  );
};
