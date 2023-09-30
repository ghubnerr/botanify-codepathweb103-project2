const renderTree = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())

  const response = await fetch('/trees')
  const data = await response.json()

  const treeContent = document.getElementById('tree-content')

  let tree

  tree = data.find(tree => tree.id === requestedID)

  if (tree) {
    document.getElementById('image').src = tree.image
    document.getElementById('title').textContent = tree.title
    document.getElementById('text').textContent = tree.text
    document.title = `Botanify - ${tree.title}`
  }
  else {
    const message = document.createElement('h2')
    message.textContent = 'No Trees to Display'
    treeContent.appendChild(message)   
  }
}

renderTree()
