import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "l23k42",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! ",
    },
    {
      id: "io3jt4",
      label: "Can I use JavaScript on a project?",
      content:
        "You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! ",
    },
    {
      id: "oi34j5",
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! ",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
