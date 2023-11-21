function renderHero() {
    const hero = document.querySelector(".hero");
    hero.innerHTML = `
        <p class="date">JULY 23, 2022</p>
        <p class="title">My new journey as a bootcamp student.</p>
        <p class="description">After several months of learning in the Frontend Developer Career Path, 
            I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects 
            projects and meet like-minded peers.</p>
    `;
    hero.style.backgroundImage = "url('https://picsum.photos/id/0/2000/1000')";
}

renderHero();

function renderPosts(count) {
    const posts = document.querySelector(".posts");
    posts.innerHTML = ``;
    for (let i = 1; i < count+1; i++) {
        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = `
            <img src="https://picsum.photos/id/${i}/500/300" alt="random image" />
            <p class="date">JULY 23, 2022</p>
            <p class="title">My new journey as a bootcamp student.</p>
            <p class="description">After several months of learning in the Frontend Developer Career Path, 
                I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects 
                projects and meet like mind peers.</p>
        `;
        posts.appendChild(post);
    }
    if (count === 3) {
        const viewMoreButton = document.createElement("button");
        viewMoreButton.addEventListener("click", () => {
            renderPosts(7);
        })
        viewMoreButton.classList.add("view-more");
        viewMoreButton.innerHTML = "View More";
        posts.appendChild(viewMoreButton);
    }
}

renderPosts(3);

function copyright() {
    const date = new Date();
    const year = date.getFullYear();
    const copyright = document.getElementById("copyright");
    copyright.innerHTML = `&copy; ${year}. All rights reserved.`;
}

copyright();
