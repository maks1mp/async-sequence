export default function render(
  { user, company, location } = {},
  node = document.getElementById("root")
) {
  console.log(user, company, location);

  const template = `
        <h1>User data: ${user.name} (${user.id})</h1>
        <h2>Company title: ${company.title}</h2>
        <h3>Location:</h3>
        <ul>
            <li>${location.country}</li>
            <li>${location.city}</li>
            <li>${location.street}</li>
            <li>${location.lat} ${location.lon}</li>
        </ul>
    `;

  node.innerHTML = template;
}
