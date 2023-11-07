import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  name: string;
  icon: IconType;
  alert?: string;
  href: string;
}

const SideLink: React.FC<Props> = ({ icon: Icon, name, alert, href }) => {
  return (
    <div>
      <li>
        <Link
          href={href}
          className="flex items-center p-2 text-black shadow hover:rounded-lg  hover:shadow-lg group transition-all duration-200"
        >
          <Icon className="text-xl" />
          <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
          {alert && (
            <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-black bg-red-600 rounded-full">
              {alert}
            </span>
          )}
        </Link>
      </li>
    </div>
  );
};

export default SideLink;
