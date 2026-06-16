async function getMD() {
    const response = await fetch('input.md');
    const content = await response.text();

    const place = document.getElementById("markdown-content")

    const postMarked = marked.parse(content)
    
    place.innerHTML = postMarked;
}

getMD()