

// Helper function to get column class with offsets
const getColumnClass = (index: number) => {
  // Mobile (2 columns): offset column 2 (index % 2 === 1)
  // Desktop (5 columns): offset columns 2 & 4 (index % 5 === 1 || index % 5 === 3)
  const isMobileOffset = (index % 2) === 1;
  const isDesktopOffset = (index % 5) === 1 || (index % 5) === 3;
  
  return `${isMobileOffset ? 'translate-y-8' : ''} ${isDesktopOffset ? 'md:translate-y-12' : isMobileOffset ? 'md:translate-y-0' : ''}`;
};

function Photos() {
    // Generate array of image imports
    const images = [];
    for (let i = 1; i <= 120; i++) {
        try {
            images.push({
                src: new URL(`../assets/Dispo Shots/Dispo - ${i}.jpeg`, import.meta.url).href,
                alt: `Disposable camera photo ${i}`
            });
        } catch (error) {
            console.error(`Error loading image ${i}:`, error);
        }
    }

    return (
        <div>
            <section
                id="photos"
                className="flex flex-col min-h-dvh items-center justify-center text-center py-22 px-4">
                <div className="mb-16 w-full max-w-7xl">
                    <h2 className="mb-16 text-3xl">
                        Disposable Camera Shots
                    </h2>
                    
                    {/* Photo Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-8">
                        {images.map((image, index) => (
                            <div 
                                key={index}
                                className={`relative ${getColumnClass(index)} transition-transform duration-300 hover:scale-105`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-auto object-cover rounded-lg shadow-md"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Photos
