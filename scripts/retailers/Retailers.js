const RetailerComponent = (retailer, distributor, flowerArray) => {
  console.log("retailer", retailer, "distributor", distributor, "flowerArray", flowerArray)
  return `
    <section class="retailer">
          <header>
              <h2>${retailer.name}</h2>
          </header>
          <section class="content">
          <div>Address: 
              <p>${retailer.address}</p>
              <p>${retailer.city}, ${retailer.state}</p>
          </div>
          <br>
          <div>Distributor: ${distributor.name}</div>
          <br>
          <div>Nurseries:</div><br>
          ${flowerArray.map(nursery => `

          ${nursery.name} Flowers Provided: <ul>${nursery.foundFlower.map(flower => `

          <li>${flower.color.color} ${flower.commonName}</li>
           <br>`
          
          ).join("")}
          </ul>`
        
          ).join("")}
          
          </section>
          
          </section>
    </section>
  `
}

export default RetailerComponent