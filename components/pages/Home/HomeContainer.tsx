import {Types} from "@/types/types";

type Props = {
  children: Types["children"];
  className?: string;
}

function HomeContainer({children, className}: Props) {
  return (
    <div className={`px-40 ${className}`}>
      {children}
    </div>
  );
}

export default HomeContainer;