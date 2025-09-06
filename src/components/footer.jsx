function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer class="footer mt-auto py-3 bg-dark text-light mb-0">
                <div class="footer-container text-center">
                <p></p>
                <span class="text-muted">
                    &copy; Copyright {currentYear}, All rights reserved.
                    <br/>
                    <small>Designed and maintained by Prakhar Srivastava</small>
                </span>
                </div>
            </footer>
        </>
    )
}

export default Footer