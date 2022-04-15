interface IProps {
  Icon: any;
  text: string;
  onClick?: () => void;
}

const SidebarLink: React.FC<IProps> = ({ Icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-slate-200 flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation cursor-pointer`}>
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </button>
  );
};

export default SidebarLink;
