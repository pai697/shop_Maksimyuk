import { useContext } from 'react';
import { ShopContext } from '../context';
import {GoodsItem} from './GoodsItem';
import {Category} from "./Category";
import usePagination from "../hooks/usePagination";
import {Pagination} from "./Pagination";

function GoodsList() {
    const {goods = []} = useContext(ShopContext);

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 2,
        count: goods.length,
    });

    if(!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <>
            {goods.slice(firstContentIndex, lastContentIndex).map(item => (
            <div key={item.name}>
                <Category name = {item.name}/>
                <div className="goods">
                    {item.products.map(product => <GoodsItem key = {product._id} {...product}/>)}
                </div>
            </div>
        ))}
        <Pagination page={page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} setPage={setPage}/>
        </>
    )
}

export {GoodsList};