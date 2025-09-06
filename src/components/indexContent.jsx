function IndexContent() {
    return (
        <>
            <div class="container-fluid hero-bg h-100 flex-column p-4 text-light text-justify">
                <div class="container text-center w-md-75 landing p-4">
                <img src="static/assets/img/profile-img.jpg" class="img img-fluid rounded-circle border border-dark"/>
                <h1>Prakhar Srivastava</h1>
                <p class="lead text-primary font-weight-bold">
                    <b>Full-stack Developer | Cloud Solution Architect | Professional Scrum Master</b>
                </p>
                <div class="w-md-75 mx-auto">
                    <p class="lead">
                    A <span class="text-info text-underline"><u>Python developer</u></span> who loves deploying applications
                    on the <span class="text-warning"><u>AWS cloud</u></span>, let them scale, sit back and relax 🥤😎.
                    With an insatiable thirst to learn, I enjoy mastering new technologies and expanding my horizons.
                    Interested in working on Python-based projects and implementing cloud solutions,
                    possibly discharging my duties as a <span class="text-success"><u>Scrum Master</u></span>.
                    </p>
                    <a class="btn btn-primary" href="{% url 'skills_home' %}" role="button">Go to Skills</a>
                    <a class="btn btn-warning"  href="{% static 'docs/Prakhar_Srivastava.pdf' %}" target="_new" role="button">View CV</a>
                </div>
                </div>
            </div>
            <div class="container-fluid p-4 bg-light">
                <div class="container w-75">
                    <div class="row">
                    <div class="col-md-5">
                        <img src="static/assets/img/pro-pic.jpg" class="img-fluid border rounded"/>
                    </div>
                    <div class="col-md-7 text-start">
                        <h2 class="p-4 text-center">About Me</h2>
                        <p class="ps-4 pe-4 lead text-justify">
                        A highly motivated and passionate developer with 6+ years of work experience,
                        developing robust code for critical projects and with hands on experience in
                        technologies such as React/Node, Python and certifications in Scrum and AWS.
                        </p>
                        <p class="ps-4 pe-4 lead text-justify">
                        Currently working as the Technology Lead at a promising product-based startup called AdvaRisk 
                        since July of 2022. Prior to this, I was a part of one of the biggest MNCs of the world, Tata 
                        Consultancy Services Ltd.
                        </p>
                        <p class="ps-4 pe-4 lead text-justify">
                        Born and brought up at Prayagraj, I completed my schooling from Boys' High
                        School and College from my hometown. In fact, I got a degree in Computer Science
                        and Engineering from a government college, Institute of Engineering and Rural Technology
                        which is also located in my hometown. I ended up being the topper of my batch.
                        </p>
                        <p class="ps-4 pe-4 lead text-justify">
                        Ever since I was a kid, I enjoyed learning new things and hence I went ahead and
                        took some certifications including PSM-1 and AWS Solution Architect (Associate) to
                        advance my career.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default IndexContent