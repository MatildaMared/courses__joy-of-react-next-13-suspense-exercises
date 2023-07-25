import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton/LibraryGameCardSkeleton";
import range from "lodash.range";

export default function Loading() {
  return (
    		<section className="max-width-wrapper">
			<header className="library-header">
				<h1>My games</h1>
			</header>
			<div className="game-grid">
        {range(0, 12).map((index) => (
          <LibraryGameCardSkeleton key={index} />
        ))}
			</div>
		</section>
  )
}
