import { useEffect, useState } from 'react';
import { API_URL } from '../../consts';
import { IUser, IUserState } from '../Interfaces/IUser';

const useUsers = () => {
  const [state, setState] = useState<IUserState>({
    users: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(API_URL);

        if (response.ok) {
          const users: IUser[] = await response.json();

          setState({
            users,
            loading: false,
            error: null,
          });
        } else {
          if (response.status === 404) {
            throw new Error('404, Not found');
          }

          if (response.status === 500) {
            throw new Error('500, internal server error');
          }

          throw new Error(response.status.toString());
        }
      } catch (error) {
        console.log(error.message);

        setState({ users: null, loading: false, error: error.message });
      }
    };

    getUsers();
    return () => {};
  }, []);

  return state;
};

export default useUsers;
