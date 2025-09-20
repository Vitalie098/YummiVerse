export const steps =  [
  {
    time: 3,
    title: "Preheat the oven",
    subtitle: "Preheat the air fryer to 190˚C.",
    checked: true
  },
  {
    time: 5,
    title: "Cook the aubergines",
    subtitle: "Put the aubergines and drained chickpeas into a bowl, add the oil and mix. Add the seasoning and mix again until coated.",
    checked: true
  },
  {
    time: 15,
    title: "Prepare the sauce",
    subtitle: "To make the pepper stew, fry the onion and peppers in the oil until browned, add the chopped tomatoes, tomato paste, sugar, pepper and 150 ml water and bring to the boil. Reduce the heat and simmer for 10 minutes.",
    checked: true
  },
  {
    time: 15,
    title: "Serve the stew",
    subtitle: "Serve the stew in bowls, topped with the aubergine and chickpea mixture. Drizzle with the yogurt and add the bread for dunking in the sauce..",
    checked: false,
    image: true,
    description1: {text: "200gr of 500gr Chopped chorizo", type: "serving"},
    description2: {text: "Knife - large pot - cutting board", type: "utensils"}
  },
  {
    time: 1,
    title: "Preheat the oven",
    subtitle: "Preheat the air fryer to 190˚C.",
    checked: false,
    image: true
  }
]

export const advices: {
    type: "nutritional" | "tasty";
    title: string;
    subtitle: string
}[]  = [
    {type: "nutritional", title: "Nutritional advice", subtitle: "Cheese provides calcium to your diet."}, 
    {type: "tasty", title: "Tasty tip", subtitle: "Serve it with the sauce of your choice and a little lemon on the side."}
]

export const comments = [
  {
    id: 1,
    name: "Sarah Jones",
    time: "3h",
    comment: "Super delicious dish! My kids loved it!",
    likes: 23,
    comments: 13
  },
  {
    id: 2,
    name: "Mary Poppins",
    time: "6h",
    comment: "Love the recipe! I added a bit of spicy sauce. ☺️",
    likes: 12,
    comments: 2
  },
  {
    id: 3,
    name: "Sam Wrights",
    time: "5h",
    comment: "Perfect recipe for a light lunch 👍🏻",
    likes: 12,
    comments: 2
  },
]