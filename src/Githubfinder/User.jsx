// eslint-disable-next-line react/prop-types
function User({ user }) {
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,

    html_url,
  } = user;
  console.log(user);
  return (
    <div>
      <img className="w-[100px] rounded-full " src={avatar_url} alt="" />
      <a href={html_url}>find on git hub</a>
      <p> Follwers:{followers} </p>
      <p> Following :{following}</p>

    </div>
  );
}

export default User;
