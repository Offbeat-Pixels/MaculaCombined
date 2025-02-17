import { FocusCards } from "./ui/focus-cards";

export default function FocusCardsComp() {
  const cards = [
    {
      title: "Get tailored guidance from industry-leading advisors ",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Efficiently fundraise with our expert support ",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Benefit from outsourced operational leadership roles ",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Optimize finances with seasoned CFO insights",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
    {
      title: "Business Meeting",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=4000&auto=format&fit=crop",
    },
    {
      title: "Team Discussion",
      src: "https://images.unsplash.com/photo-1559028012-d3d4a2a0f876?q=80&w=4000&auto=format&fit=crop",
    },
    {
      title: "Consulting Session",
      src: "https://images.unsplash.com/photo-1560264280-88b68371db30?q=80&w=4000&auto=format&fit=crop",
    },
    {
      title: "Strategy Planning",
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=4000&auto=format&fit=crop",
    },
    {
      title: "Corporate Collaboration",
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=4000&auto=format&fit=crop",
    },
  ];

  return <FocusCards cards={cards} />;
}

