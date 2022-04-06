import useSWR from 'swr'
import Image from 'next/image'
import NumberFormat from "react-number-format";
import { useAtom } from 'jotai'
import { itemsAtom, addItemAtom } from '@components/stores/Store'
import { buttonsAtom, addButtonAtom, deleteButtonAtom } from '@components/stores/Buttons'

const fetcher = (url) => fetch(url).then((res) => res.json())

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#6ee7b7" offset="20%" />
      <stop stop-color="#10b981" offset="50%" />
      <stop stop-color="#6ee7b7" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#6ee7b7" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function ItemList() {
	const [buttons,] = useAtom(buttonsAtom)
	const [items,] = useAtom(itemsAtom)
	const [, addButton] = useAtom(addButtonAtom)
	const [, deleteButton] = useAtom(deleteButtonAtom)
	const [, addItem] = useAtom(addItemAtom)
	const { data, error } = useSWR('/api/items', fetcher)

	if (error) return <div>Failed to load items.</div>
	if (!data) return <div>Loading...</div>
	return (
		<section className="px-8 py-6">
			<div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{data.map((product) => (
					<div
						key={product.id}
						className="group transform hover:scale-105 transition-all duration-300 w-full flex flex-col rounded-lg shadow-md overflow-hidden bg-white hover:bg-gray-100"
						onClick={() => {
							if (buttons.filter((item) => item.id === product.id).length == 0) {
								addButton({ id: product.id })
								addItem({ id: product.id, title: product.title, price: product.price })
								setTimeout(() => {
									deleteButton(product.id)
								}, 2000)
							}
						}
						}>
						<div className="relative h-64 bg-cover overflow-hidden image-container">
							<Image className="transition-all duration-200" src={product.image} alt={'Image of ' + product.title} layout="fill" objectFit="cover" loading="eager" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
							<div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-700 opacity-60"></div>
							<NumberFormat thousandSeparator={true} prefix="$" value={product.price} displayType="text" className="relative flex items-end justify-end w-full h-full p-4 text-lg font-bold text-white" />
						</div>
						<div className="flex items-center justify-between p-4">
							<div>
								<h3 className="font-semibold text-lg">{product.title}</h3>
								<p className="text-gray-600">{product.description}</p>
							</div>
							{buttons.filter((item) => item.id === product.id).length > 0 ? (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>) : (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							)}
						</div>
					</div>
				))}
			</div>
			<h2 className="text-md mt-6 text-green-900 font-semibold">
				Browsing {data.length} item{data.length > 1 ? 's' : ''}
			</h2>
		</section>
	)
}