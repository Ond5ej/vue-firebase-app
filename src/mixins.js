export const priceMethods = {
  methods: {

    formatPrice (price) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
      return formatter.format(price)
    }

  }
}
