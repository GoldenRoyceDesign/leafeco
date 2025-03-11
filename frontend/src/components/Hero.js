// src/components/Hero.js


export default function Hero() {
    return (
        <div className="hero-section py-5 d-flex flex-column justify-content-center">
            <div className="container">
                {/* Left Section - Text */}
                <div className="d-flex flex-column justify-content-center gap-3">
                    <h1 className="fw-bold">LeafEco</h1>
                    <p className="my-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
                    </p>
                    <button className="btn px-4">LEARN MORE</button>
                </div>

            </div>
        </div>
    );
}
