import { useState } from "react";
import Decimal from "../assets/decimal"

const INITIAL_PAGE = 0;
export default function usePage(list = []) {
    const limit = 6;
    let maxPages = list.length / limit
    let decimal = new Decimal((maxPages));
    if (!decimal.isInteger()) {
        maxPages = Math.round(maxPages) + 1
    }
    const [page, setPage] = useState(INITIAL_PAGE)
    let pagination = [];
    let lastPage = false;
    if (list.length > 0) {
        let offset = limit * page;
        let end = offset + limit
        end = end <= list.length ? end : list.length;
        for (offset; offset < end; offset++) {
            pagination.push(list[offset])
        }
        lastPage = end === list.length

    }



    return [pagination, page, lastPage, setPage, maxPages]
}