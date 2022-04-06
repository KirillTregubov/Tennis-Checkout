import 'tailwindcss/tailwind.css'
import LayoutWrapper from '@components/layouts/LayoutWrapper'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@styles/styles.css'

export default function MyApp({ Component, pageProps }) {
	return (
		<div>
			<ToastContainer />
			<LayoutWrapper {...pageProps}>
				<Component {...pageProps} />
			</LayoutWrapper>
		</div>
	)
}