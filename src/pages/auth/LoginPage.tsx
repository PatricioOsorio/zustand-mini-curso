import { FormEvent } from 'react';

export const LoginPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const { username, password, remember } = event.target as HTMLFormElement;
    const { username, password, remember } = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
      remember: { checked: boolean };
    };
    console.log(username.value, password.value, remember.checked);

    username.value = '';
    password.value = '';
    remember.checked = false;
  };

  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold">Login</h1>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Username</label>
          <input autoComplete="off" name="username" type="text" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input autoComplete="off" name="password" type="password" />
        </div>

        <div className="mb-4 flex items-center">
          <input className="text-blue-500" name="remember" type="checkbox" />
          <label className="ml-2 text-gray-600">Remember Me</label>
        </div>

        <div className="mb-6 text-blue-500">
          <a className="hover:underline" href="#">
            Forgot Password?
          </a>
        </div>

        <button className="bg-indigo-600" type="submit">
          Login
        </button>
      </form>
      <div className="mt-6 text-center text-blue-500">
        <a className="hover:underline" href="#">
          Sign up Here
        </a>
      </div>
    </>
  );
};
