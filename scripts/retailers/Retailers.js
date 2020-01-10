const RetailerComponent = (retailer, distributor, foundNurseryArray, flowerArray) => {
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
          ${flowerArray.map(flower => 
            flower.map(fl =>
              `<li>${fl.color} ${fl.commonName}</li>`).join("")).join("")}
          </ul>
          </section>
    </section>
  `
}

export default RetailerComponent