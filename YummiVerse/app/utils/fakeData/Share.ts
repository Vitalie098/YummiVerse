interface IShareContent {
  topic: string
  title: string
  subtitle: string
}

export const shareContent: Record<"photo" | "comment", IShareContent > = {
  photo: {
    topic: "Share a photo",
    title: "Cool pic!",
    subtitle: "If you’re satisfied with the photo, we’ll add it to the recipe’s comments."
  },
  comment: {
    topic: "Share a comment",
    title: "Any tips to share?",
    subtitle: "It’s time to spill your secrets. Write a comment and we’ll add it below the recipe!"
  }
}