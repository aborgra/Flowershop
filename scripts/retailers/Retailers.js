const RetailerComponent = (retailer, distributor, flowerArray) => {
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
          ${flowerArray.map(nursery => nursery.map(nurs => `
          ${nurs[0].name}
          <div> Provides: ${nurs[1].color.color} ${nurs[1].commonName}
          </div> <br>`).join("")).join("")}
          </section>
          
          </section>
    </section>
  `
}

export default RetailerComponent