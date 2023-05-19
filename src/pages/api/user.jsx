// /api/user?id=9999999

export default async function handler(req, res) {
  const id = req.query.id

  const user = await (async () => {
    try {
      const response = await fetch(`https://api.github.com/user/${id}`)
      return await response.json()
    } catch (error) {
      return null
    }
  })()

  const getReadme = async (repo) => {
    try {
      const readmeResponse = await fetch(
        `https://api.github.com/repos/${repo.owner.login}/${repo.name}/readme/`
      )
      const readme = (await readmeResponse.json()) || null
      const rawFileResponse = (await fetch(readme.download_url)) || null
      const rawFile = (await rawFileResponse.text()) || null

      return {
        download_url: readme.download_url,
        content: rawFile,
      }
    } catch (error) {
      return null
    }
  }
  const repos = await (async () => {
    try {
      const response = await fetch(user.repos_url)
      const data = await response.json()

      for (const repo of data) {
        const readme = await getReadme(repo)

        repo['readme'] = {
          content: readme?.content || null,
          download_url: readme?.download_url || null,
        }
      }

      data.sort((a, b) => {
        const dateA = new Date(a.created_at)
        const dateB = new Date(b.created_at)
        return dateB - dateA
      })

      return data
    } catch (error) {
      console.error(error)
      return null
    }
  })()

  res.status(200).json({ user, repos })
}
