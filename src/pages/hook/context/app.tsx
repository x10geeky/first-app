import Controller from './controller';
import Count from './count';
import Login from './login';
import Profile from './profile';

export default function AppPage() {
  return (
    <div>
      <Login />
      <Profile />
      ----
      <Count />
      <Controller />
    </div>
  );
}
