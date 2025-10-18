const RightArrow: React.FC<any> = (props) => {
  return (
    <svg
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 2L18 9M18 9L11 16M18 9H2"
        stroke="#1A1A1A"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
