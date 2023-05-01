import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children }) {
  const { navigate } = useNavigation();

  const classes = classNames("text-blue-500");

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
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
