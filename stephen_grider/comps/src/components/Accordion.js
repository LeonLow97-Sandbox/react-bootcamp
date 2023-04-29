import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // Conditional Rendering - returns the last truthy value which is <div>{item.content}</div>
    const content = isExpanded && <div>{item.content}</div>;

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        {content}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
