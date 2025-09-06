function Nav() {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link {% if title == 'Skills' %}active{% endif %}" href="{% url 'skills_home' %}">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {% if title == 'Certificates' %}active{% endif %}" href="{% url 'all_certificates' %}">Certificates</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {% if title == 'Blog' %}active{% endif %}" href="{% url 'blog' %}">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{% static 'docs/Prakhar_Srivastava.pdf' %}" target="_new">CV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {% if title == 'Contact' %}active{% endif %}" href="{% url 'contact_home' %}">Contact</a>
                    </li> */}
                    </ul>
                    <div class="d-flex">
                    {/* <a href="https://github.com/prakhar-srivastava-1" class="github p-2 side-nav text-secondary"><i class="bx bxl-github"></i></a>
                    <a href="https://www.linkedin.com/in/prakhar-srivastava-033547a3/" class="linkedin p-2 side-nav text-secondary"><i class="bx bxl-linkedin"></i></a>
                    <a href="https://www.facebook.com/prakhar.srivastava.526" class="facebook p-2 side-nav text-secondary"><i class="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/jovial_bee/?hl=en" class="instagram p-2 side-nav text-secondary"><i class="bx bxl-instagram"></i></a> */}
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav