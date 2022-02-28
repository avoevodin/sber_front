const $posts = document.querySelector('[data-posts]')

$posts.addEventListener('click', async (e) => {
  if (e.target.dataset.like) {
    const parent = e.target.closest('[data-post_id]')
    const response = await fetch(`/like/${parent.dataset.post_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        like: e.target.dataset.like,
      }),
    })

    if (response.status === 200) {
      const serverData = await response.json()
      const $rating = parent.querySelector('[data-post_rating]')
      $rating.innerText = serverData.rating
    }
  }
})
