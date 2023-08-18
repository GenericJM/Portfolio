import PageButton from "../buttons/PageButtons"
import forward from "@/assets/svg/forward.svg"
import backward from "@/assets/svg/back.svg"
export default function ListOfPages({ setPage, page, lastPage, maxPages }) {
    const handleNextPage = () => { setPage(prevPage => prevPage + 1) }
    const handlePrevPage = () => { setPage(prevPage => prevPage - 1) }

    let pages = [];
    for (let i = 0; i <= 3; i++) {
        let actualPage = page + 1 + i;
        if (actualPage >= (maxPages + 1)) break;
        if (i < 3) {

            pages.push(actualPage);
        }
        else {
            if (pages.length >= 3) pages.push("...")
            pages.push((maxPages));
        }
    }
    return <section className="pageButtons">
        {page > 0 ?
            <PageButton action={handlePrevPage} image={backward} />
            :
            null
        }
        {pages.map(x =>

            <div className="nPage" key={x}> <label >{x}</label></div>

        )}

        {!lastPage ?
            <PageButton action={handleNextPage} image={forward} />
            :
            null

        }

    </section>
}
