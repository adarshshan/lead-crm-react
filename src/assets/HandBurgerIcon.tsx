const HandBurgerIcon: React.FC<any> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      data-slot="icon"
      aria-hidden="true"
      className="size-6 !text-[#2D96BC]"
      {...props}
    >
      <path
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HandBurgerIcon;
