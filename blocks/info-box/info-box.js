export default async function decorate(block) {
  const rows = [...block.children];
  const [titleRow, descriptionRow] = rows;

  const title = titleRow?.children[1]?.textContent.trim() || '';
  const description = descriptionRow?.children[1]?.textContent.trim() || '';

  const heading = document.createElement('h3');
  heading.textContent = title;

  const paragraph = document.createElement('p');
  paragraph.textContent = description;

  block.textContent = '';
  block.append(heading, paragraph);
}
