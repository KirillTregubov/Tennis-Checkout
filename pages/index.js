import Head from 'next/head'
import ItemList from '@components/ItemList'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<main className="">
				<div className="flex items-center relative text-green-200 h-48">
					<svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
						<defs>
							<pattern id="bg" patternUnits="userSpaceOnUse" width="60" height="96">
								<g fillRule="evenodd"><g fill="currentColor"><path d="M36 10a6 6 0 0 1 12 0v12a6 6 0 0 1-6 6 6 6 0 0 0-6 6 6 6 0 0 1-12 0 6 6 0 0 0-6-6 6 6 0 0 1-6-6V10a6 6 0 1 1 12 0 6 6 0 0 0 12 0zm24 78a6 6 0 0 1-6-6 6 6 0 0 0-6-6 6 6 0 0 1-6-6V58a6 6 0 1 1 12 0 6 6 0 0 0 6 6v24zM0 88V64a6 6 0 0 0 6-6 6 6 0 0 1 12 0v12a6 6 0 0 1-6 6 6 6 0 0 0-6 6 6 6 0 0 1-6 6z" /></g></g>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#bg)" />
					</svg>
					<div className="absolute">
						<h1 className="p-8 text-black text-2xl font-bold">
							Browse our 2021 Fall Collection
						</h1>
					</div>
				</div>
				<ItemList />
			</main>
		</div>
	)
}
