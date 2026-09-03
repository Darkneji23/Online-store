async function loadHeader(): Promise<void> {
  const header = document.querySelector<HTMLElement>("#header");

  if (!header) return;

  const response = await fetch("../components/header.html");
  const html = await response.text();

  header.innerHTML = html;
}

loadHeader();
