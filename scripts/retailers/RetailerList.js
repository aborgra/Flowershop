import { useRetailers } from "./RetailerProvider.js"
import RetailerComponent from "./Retailers.js"
import { useDistributors } from "../distributors/DistributorProvider.js"



const contentTarget = document.querySelector(".retailers")

export const RetailerListComponent = () => {

  const retailers = useRetailers()
  const distributors = useDistributors()

  const render = () => {
    contentTarget.innerHTML = retailers.map(retailer => {
      const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)

      
     return RetailerComponent(retailer, distributor)}).join("")
  }

  render()

}