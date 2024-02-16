import useUsers from '../hooks/useUser';

export const UserList = () => {
  const { users, loading, error } = useUsers();
  if (error) return <p>{error}</p>;

  if (loading) return <p>loading</p>;

  return (
    <div>
      {users?.map(user => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};
