function renderFullPost() {
    const fullPost = document.querySelector(".full-post");
    fullPost.innerHTML = `
        <div class="post-container">
            <p class="date">JULY 23, 2022</p>
            <p class="title">My new journey as a bootcamp student.</p>
            <p class="description">After several months of learning in the Frontend Developer Career Path,
                I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects
                projects and meet like-minded peers.</p>
        </div>
        <img src="https://picsum.photos/id/0/2000/1000" alt="random image" />
        <p class="content">
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
            <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /><br /><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
            <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    `;
}

renderFullPost();

function renderRecentPosts() {
    const recentPosts = document.querySelector(".recent-posts");
    recentPosts.innerHTML = `<p class="recent-posts-title">Recent Posts</p>`;
    for (let i = 0; i < 3; i++) {
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
        recentPosts.appendChild(post);
    }
}

renderRecentPosts();

function copyright() {
    const date = new Date();
    const year = date.getFullYear();
    const copyright = document.getElementById("copyright");
    copyright.innerHTML = `&copy; ${year}. All rights reserved.`;
}

copyright();