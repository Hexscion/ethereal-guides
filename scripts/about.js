function renderAbout() {
    const about = document.querySelector(".about");
    about.innerHTML = `
        <img src="https://picsum.photos/id/0/200/200" alt="random image" />
        <p class="title">Hi there! My name is Chris and welcome to my guides page.</p>
        <p class="description">
            Hi there! I'm [Your Name], a passionate [Your Profession]. With [X] years of experience in the field, 
            I have acquired a solid understanding of [specific skills or technologies]. 
            I am excited about [specific areas of interest] and enjoy working on projects that align with my interests.
        </p>
        <p class="about-content">
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

renderAbout();

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