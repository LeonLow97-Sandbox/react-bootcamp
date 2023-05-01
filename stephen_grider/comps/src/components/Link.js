import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    // If user holds control key and click link, default browser behavior is to open a new tab.
    // check for metaKey (macOS) and ctrlKey (windows). If true, we follow the default browser behavior
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
