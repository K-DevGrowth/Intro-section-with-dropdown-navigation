const Dropdown = ({ dropdownItems }) => {
  return (
    <>
      {dropdownItems.map((item) => (
        <div key={item.text} className="flex items-center gap-x-2 cursor-pointer py-1 px-4">
          <img src={item.image} alt="" />
          <p className="my-1 hover:text-Gray-950">{item.text}</p>
        </div>
      ))}
    </>
  );
};

export default Dropdown;
