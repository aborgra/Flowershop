const RetailerComponent = (retailer, distributor, foundNurseryArray, allColorFlowerArrays) => {
  return `
    <section class="employee">
          <header>
              <h2>${retailer.name}</h2>
          </header>
          <section class="content">
          <div>Address: 
              <p>${retailer.address}</p>
              <p>${retailer.city}, ${retailer.state}</p>
          </div>
          <div>Distributor: ${distributor.name}</div>
          <div>Nurseries:
          <ul class="nurseryRelationship">
          ${foundNurseryArray.map(nursery => `
          <li>${nursery.name}</li>`).join("")}
          </ul>
          </section>
          <div>Flowers:
          <ul class="flowerRelationship">
          ${allColorFlowerArrays.map(flower => 
            
              `<li>${flower[1].color} ${flower[0].commonName}</li>`).join("")}
          </ul>
          </section>
    </section>
  `
}

export default RetailerComponent