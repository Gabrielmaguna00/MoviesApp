// rafce
import React, { useEffect, useState, useRef } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Row = ({ title, movies }) => {
	// const [movies, setMovies] = useState([])

	const slider = useRef()

	// useEffect(() => {
	// 	axios.get(fetchURL).then(response => {
	// 		setMovies(response.data.results)
	// 	})
	// }, [fetchURL])
	// fetch in dependency array: Whenever the url changes the component will fire of again.
	//   console.log(movies);

	const slideLeft = () => {
		slider.current.scrollLeft = slider.current.scrollLeft - 500
	}
	const slideRight = () => {
		slider.current.scrollLeft = slider.current.scrollLeft + 500
	}

	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft
					onClick={slideLeft}
					className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>
				<div
					ref={slider}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
				>
					{movies.map((item, id) => (
						<Link to={`./movie/${item.id}`}>
							<Movie key={id} item={item} />
						</Link>
					))}
				</div>
				<MdChevronRight
					onClick={slideRight}
					className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>
			</div>
		</>
	)
}

export default Row
