export default {
  beforeCreate(event) {
    const { data } = event.params
    const name = data.Name || ""
    const lastname = data.Lastname || ""

    if (name || lastname) {
      data.fullName = `${name} ${lastname}`.trim()
    }
  },
  beforeUpdate(event) {
    const { data } = event.params

    const name = data.Name !== undefined ? data.Name : ""
    const lastname = data.Lastname !== undefined ? data.Lastname : ""

    // Solo actualizamos el fullName si se editó el name o el lastname
    if (data.Name !== undefined || data.Lastname !== undefined) {
      data.fullName = `${name} ${lastname}`.trim()
    }
  },
}
