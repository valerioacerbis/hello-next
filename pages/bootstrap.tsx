import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

const Bootstrap: NextPage = () => {


    function init() {
        window.alert('success')
    }

    function onError() {
        window.alert('ahia!')
    }

    return (
        <>
            <Head>
                <title>Front End Gadgets</title>
                <meta name="description" content="Front end gadget is a demo site to learn Next" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
            </Head>

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
                onLoad={init}
                onError={onError}
            />

            BOOTSRAP

        </>
    )
}

export default Bootstrap