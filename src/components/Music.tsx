import { ceremonySongs, cocktailHourSongs, weddingCoupleIntroSongs, cakeCuttingSongs, firstDanceSongs, danceFloorSongs, brideEntranceSongs, recessionSongs } from "../data/setListData"

function Music() {

    const danceFloorSongsLeft = danceFloorSongs.slice(0, Math.ceil(danceFloorSongs.length / 2))
    const danceFloorSongsRight = danceFloorSongs.slice(Math.ceil(danceFloorSongs.length / 2))

    const cocktailHourSongsLeft = cocktailHourSongs.slice(0, Math.ceil(cocktailHourSongs.length / 2))
    const cocktailHourSongsRight = cocktailHourSongs.slice(Math.ceil(cocktailHourSongs.length / 2))
    
    return (
        <div>
            <section
                id="music"
                className="flex flex-col min-h-dvh items-center justify-center text-center py-22 px-8">
                <div className="mb-16">
                    <h2 className="mb-12 text-3xl">
                        Stella Strings Setlist
                    </h2>
                    <div className="mb-8">
                        <h3 className="mb-4 text-xl">Bridal Entrance Songs</h3>
                        <ul>
                            {brideEntranceSongs.map((song, index) => (
                                <li className="pb-1" key={index}>{song}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="mb-4 text-xl">Ceremony Songs</h3>
                        <ul>
                            {ceremonySongs.map((song, index) => (
                                <li className="pb-1" key={index}>{song}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="mb-4 text-xl">Recessional Song</h3>
                        <p>{recessionSongs}</p>
                    </div>
                </div>
                <div className="mb-16">
                    <h2 className="mb-12 text-3xl">
                        Cocktail Setlist
                    </h2>
                    <div>
                        <div className="grid grid-cols-2 gap-8">
                            <ul className="space-y-2">
                                {cocktailHourSongsLeft.map((song, index) => (
                                    <li key={index}>{song}</li>
                                ))}
                            </ul>
                            <ul className="space-y-2">
                                {cocktailHourSongsRight.map((song, index) => (
                                    <li key={index}>{song}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="mb-12 text-3xl">
                        DJ YJ Setlist
                    </h2>
                    <div className="mb-8">
                        <h3 className="mb-6 text-xl">Reception</h3>
                        <div className="mb-8">
                            <h4 className="mb-2 text-lg">Intro Song</h4>
                            <p>{weddingCoupleIntroSongs}</p>
                        </div>
                        <div className="mb-8">
                            <h4 className="mb-2 text-lg">Cake Cutting</h4>
                            <p>{cakeCuttingSongs}</p>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h3 className="mb-4 text-xl">First Dance</h3>
                        <ul className="space-y-2">
                            {firstDanceSongs.map((song, index) => (
                                <li key={index}>{song}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="mb-4 text-xl">Dance Floor</h3>
                        <div className="grid grid-cols-2 gap-8">
                            <ul className="space-y-2">
                                {danceFloorSongsLeft.map((song, index) => (
                                    <li key={index}>{song}</li>
                                ))}
                            </ul>
                            <ul className="space-y-2">
                                {danceFloorSongsRight.map((song, index) => (
                                    <li key={index}>{song}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Music
