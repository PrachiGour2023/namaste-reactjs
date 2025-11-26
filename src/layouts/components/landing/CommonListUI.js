const CommonListUI = ({ title, link }) => {
  return (
    <a href={link}>
      <div className="border border-gray-300 rounded-lg cursor-pointer">
        <p className="p-5 text-gray-700 text-center font-medium">{title}</p>
      </div>
    </a>
  );
};

export default CommonListUI;
