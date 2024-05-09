import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import css from './LoginForm.module.css';
// import { useHistory } from 'react-router-dom';


export const LoginForm = () => {
  const dispatch = useDispatch();
  // const history = useHistory(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log('login success');
        // history.push('/project-page');
      })
      .catch(() => {
        console.log('login error');
      });

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input className = {css.input} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className = {css.input} type="password" name="password" />
      </label>
      <button className = {css.btn} type="submit">Log In</button>
    </form>
  );
};
