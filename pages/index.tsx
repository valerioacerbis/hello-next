import Head from 'next/head'
import type { NextPage } from 'next'
import Image from 'next/image';

const Home: NextPage = () => {

	function onloadComplete() {
		console.log('Image Loaded')
	}

	return (
		<div>
			<Head>
				<title>FrontEnd Gadgets Title</title>
				<meta name="description" content="Front-end Gadgets is a demo site to learn Next" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="text-7xl text-pink-500 font-bold underline">FrontEnd Gadget</h1>
			<h1>Hello</h1>
			<button>Click Me</button>
			<div className="relative border-4 border-blue-500 h-96 w-96">
				<Image
					layout='fill'
					objectFit='cover'
					// src={image}
					src="https://images.unsplash.com/photo-1612896488082-7271dc0ed30c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
					width="800"
					height="800"
					alt="image"
					// placeholder="blur"
					quality={100}
					onLoadingComplete={onloadComplete}
				/>
			</div>
		</div>
	)
}

export default Home
