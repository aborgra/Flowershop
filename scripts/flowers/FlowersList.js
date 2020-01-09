import { useFlowers } from "./FlowerProvider.js"
import FlowerComponent from "./Flowers.js"


const contentTarget = document.querySelector(".flowers")

export const FlowerListComponent = () => {

  const flowers = useFlowers()

  const render = () => {
    contentTarget.innerHTML = flowers.map(flower => FlowerComponent(flower)).join("")
  }

  render()

}