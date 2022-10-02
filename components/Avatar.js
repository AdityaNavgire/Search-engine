function Avatar({ url, className }) {
  console.log(className, "Cl");
  return (
    <div>
      <img
        loading="lazy"
        src={url}
        alt="profile"
        className={`h-10 w-10 rounded-full transition duration-150  hover:scale-110 cursor-pointer ${className}`}
      />
    </div>
  );
}

export default Avatar;
