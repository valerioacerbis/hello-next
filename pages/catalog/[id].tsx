import { useRouter } from 'next/router';

function CatalogDetails() {

    const router = useRouter();
    console.log(router.query.id)

    return (
        <div className="page">
            <h1 className="title">Catalog Details</h1>
        </div>
    )
}

export default CatalogDetails;