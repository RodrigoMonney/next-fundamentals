export async function GitHubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch("https://api.github.com/users/rodrigomonney");
  const user = await response.json();

  return <p>{JSON.stringify(user, null, 2)}</p>
}
