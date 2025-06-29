import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    // If user holds control key and click link, default browser behavior is to open a new tab.
    // check for metaKey (macOS) and ctrlKey (windows). If true, we follow the default browser behavior
    if (event.metaKey || event.ctrlKey) {
      // if true then we just gonna use the default browser behavior to navigate, so no need e.preventDefault()
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
