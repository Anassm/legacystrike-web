const Avatar = ({ avatarUrl }) => {
  return (
    <img
      className="rounded-2xl"
      src={avatarUrl}
      height={25}
      width={25}
      alt="user"
    />
  );
};

export default Avatar;
