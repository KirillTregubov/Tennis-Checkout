import Head from "next/head";
import Link from "next/link";

const DefaultLayout = (props) => (
	<>
		<Head>
			<meta name="description" content="A simple checkout app built by Kirill Tregubov and Arjun Sahni" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div>
			<nav className="sticky z-50 w-full flex items-center justify-between bg-green-400 text-black p-4 font-semibold" id="myTopnav">
				<Link href="/">
					<a className="flex gap-x-1 hover:text-green-800">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
						</svg>
						<h1>Tennis Checkout</h1>
					</a>
				</Link>
				{/* <Link href="/admin" tag="a">
				Admin
				</Link>
				<Link href="/contact-us" tag="a">
				Contact Us
				</Link> */}
				{/* <Link href="/admin" tag="a">
				Admin
				</Link> */}
				<Link href="/checkout">
					<a className="hover:text-green-800">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					</a>
				</Link>
			</nav>
			<div>{props.children}</div>
		</div>
	</>
);

export default DefaultLayout;
