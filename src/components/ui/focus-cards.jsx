
import React, { useState } from "react"
import { cn } from "../lib/utils"

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    height,
  }) => {
    const heightClasses = {
      short: "h-48 md:h-64",
      medium: "h-64 md:h-96",
      tall: "h-80 md:h-112",
    }

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full transition-all duration-300 ease-out mb-4",
          heightClasses[height],
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        )}
      >
        <img src={card.src || "/placeholder.svg"} alt={card.title} fill className="object-cover absolute inset-0" />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    )
  },
)

Card.displayName = "Card"


export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null)

  // Function to determine height variation
  const getHeight = (index) => {
    // Create a repeating pattern of heights
    const pattern = index % 3
    switch (pattern) {
      case 0:
        return "tall"
      case 1:
        return "short"
      default:
        return "medium"
    }
  }

  return (
    <section>
      <div className="text-[5rem] pb-20 font-bold text-center">
        <p>Transform Challenges into Opportunities </p>
        <div className=" text-[2.8rem]  font-bold text-center">
          <p>Our experts guide you from seed funding to serious growth </p>
        </div>
      </div>
      <div className="columns-1 md:columns-3 gap-4 max-w-7xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            height={getHeight(index)}
          />
        ))}
      </div>
    </section>
  );
}

