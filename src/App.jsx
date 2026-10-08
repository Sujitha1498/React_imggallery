import ImageCard from "./components/ImageCard";
import "./App.css";

function App() {
  const images = [
    {
      id: "01",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      title: "Mountain Escape",
      description: "Explore peaceful landscapes and endless horizons.",
    },
    {
      id: "02",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
      title: "Into the Wild",
      description: "Discover beautiful places surrounded by nature.",
    },
    {
      id: "03",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      title: "Ocean Breeze",
      description: "A quiet moment beside the endless blue ocean.",
    },
    {
      id: "04",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      title: "Forest Walk",
      description: "Take a relaxing walk through a beautiful forest.",
    },
    {
      id: "05",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      title: "Golden Hour",
      description: "Warm light creates unforgettable moments.",
    },
    {
      id: "06",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
      title: "Adventure",
      description: "Find new places and create new memories.",
    },
  ];

  return (
    <>
      <header className="header">
        <div>
          <p className="small-title">COLLECTION 01</p>
          <h1>Visual Stories</h1>
        </div>

        <p className="header-description">
          A collection of places, moments and memories captured through
          photography.
        </p>
      </header>

      <main className="gallery">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </main>

      <footer>
        <p>React Image Gallery</p>
        <span>6 Visual Stories</span>
      </footer>
    </>
  );
}

export default App;