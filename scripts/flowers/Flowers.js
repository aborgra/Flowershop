const FlowerComponent = (flower) => {
  return `
    <section class="employee">
          <header>
              <h2>${flower.commonName}</h2>
          </header>
          <section class="content">
          <div>
              Color: ${flower.color}
          </div>
          </section>
    </section>
  `
}

export default FlowerComponent