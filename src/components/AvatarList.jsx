function AvatarList({ users }) {
  return (
    <div className="avatar-list">
      {users.map(user => (
        <li key={user.id} name={user.name} role={user.role}>
             <img src={`https://i.pravatar.cc/60?u=${user.id}`} alt="User Avatar" />
        </li>
        
      ))}
     
    </div>
  );
}

export default AvatarList;
