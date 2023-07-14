import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';



function Datatable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            
          }
          getProducts();
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (product) => {
        return <img src={product.image} alt={product.image} width='120px' height='100px' className="w-6rem shadow-2 border-round" />;
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div className="card">
            <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                <Column field="title" header="Name"></Column>
                <Column header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                <Column header="Status" body={statusBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}

export default Datatable