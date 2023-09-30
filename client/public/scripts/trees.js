const renderTrees = async () => {
  const response = await fetch('/trees')
  const data = await response.json()

  const mainContent = document.getElementById('main-content')

  if (data) {
    data.map(tree => {
      const card = document.createElement('div')
      card.classList.add('card')

      const topContainer = document.createElement('div')
      topContainer.classList.add('top-container')

      const bottomContainer = document.createElement('div')
      bottomContainer.classList.add('bottom-container')

      topContainer.style.backgroundImage = `url(${tree.image})`

      const title = document.createElement('h3')
      title.textContent = tree.title
      bottomContainer.appendChild(title)

      const text = document.createElement('p')
      text.textContent = tree.text
      bottomContainer.appendChild(text)

      const link = document.createElement('a')
      link.textContent = 'Read More >'
      link.setAttribute('role', 'button')
      link.href = `/trees/${tree.id}`
      bottomContainer.appendChild(link)

      card.appendChild(topContainer)
      card.appendChild(bottomContainer)

      mainContent.appendChild(card)
    })
  }
  else {
    const message = document.createElement('h2')
    message.textContent = 'No Trees Available to Display'
    mainContent.appendChild(message)
  }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '../404.html'
}
else {
  renderTrees()
}
