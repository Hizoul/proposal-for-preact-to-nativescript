const holder: {router: any, goBack: any} = {
  router: {routeTo: () => {}},
  goBack: () => {
    console.log("trying to go back with", history)
  }
}

export default holder